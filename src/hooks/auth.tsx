import React, {
    useContext, 
    createContext,
    useState,
    useCallback,
    useEffect 
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import User from '../utils/model/user';
import api from '../services/api';

interface SignInProps {
    email: string;
    password: string;
}

interface AuthState {
    token: string;
    user: User;
}

interface AuthContextData {
    user: User;
    loading: boolean;
    signIn(data: SignInProps): Promise<void>;
    signOut(): Promise<void>;
    updateUser(user: User): Promise<void>;
}

// Criamos um contexto do tipo AuthContextData e armazenamos em AuthContext
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
    const [data, setData] = useState<AuthState>({} as AuthState);
    const [loading, setLoading] = useState<boolean>(true);

    // Assim que for rederizado buscar no AsyncStorage os dados do user e armazenar no state
    useEffect(() => {
        async function loadStoragedData(){
            // Pega o token e o user que podem estar nas keys do AsyncStorage
            const [token, user] = await AsyncStorage.multiGet(['@SmartStorage:token', '@SmartStorage:user']);

            // Só armazena no state data se tiver algo nessas variáveis
            if(token[1] && user[1]){
                setData({ token: token[1], user: JSON.parse(user[1]) });

                // Configura o token do header globalmente para todas as requisições
                // api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            }

            // Aplicação pronta para renderizar
            setLoading(false);
        }

        loadStoragedData();
    }, []);

    const signIn = useCallback(async (data: SignInProps) => {
        setLoading(true);
      try{
            const response = await api.post('/login', data);

            const { token, user } = response.data;

            await AsyncStorage.multiSet([
                ['@SmartStorage:token', token],
                ['@SmartStorage:user', user]
            ]);

            // Configura o token do header globalmente para todas as requisições
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            // Armazena a resposta do back no data
            setData({ token, user });
        } catch(err){
            alert(err);
        } finally {
            setLoading(false);
        }
    }, []);

    const updateUser = useCallback(async (user: User) => {
        // Armazena esse user atualizado no AsyncStorage
        await AsyncStorage.setItem('@SmartStorage:user', JSON.stringify(user));

        // Armazena esse user atualizado no state
        setData({
            ...data,
            user
        });
    }, [data]);

    const signOut = useCallback(async () => {
        await AsyncStorage.multiRemove(['@SmartStorage:token', '@SmartStorage:user']);

        setData({} as AuthState);
    }, []);

    // Retornamos um React component que oferece certos dados para os componentes filhos
    // Através do Provider do contexto que criamos antes
    return(
        <AuthContext.Provider value={{ user: data.user, signIn, signOut, updateUser,loading }}>
            {children}
        </AuthContext.Provider>
    );    
};

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

export { AuthProvider, useAuth };