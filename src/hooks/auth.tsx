import React, {
    useContext, 
    createContext,
    useState,
    useCallback,
    useEffect,
    useMemo
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
    // TODO Mudar as tipagens
    user: User;
}

interface AuthContextData {
    user: User | null;
    loading: boolean;
    signIn(data: SignInProps): Promise<void>;
    signOut(): Promise<void>;
    updateUser(user: User): Promise<void>;
}

// Criamos um contexto do tipo AuthContextData e armazenamos em AuthContext
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
    // const [data, setData] = useState<AuthState>({} as AuthState);
    const [user, setUser] = useState<User | null>(null);
    // TODO: Separar lista de user
    const [loading, setLoading] = useState<boolean>(true);

    // Assim que for rederizado buscar no AsyncStorage os dados do user e armazenar no state
    useEffect(() => {
        async function loadStoragedData(){
            // Pega o token e o user que podem estar nas keys do AsyncStorage
            const [token, user] = await AsyncStorage.multiGet(['@SmartStorage:token', '@SmartStorage:user']);

            // Só armazena no state data se tiver algo nessas variáveis
            if(token[1] && user[1]){
                setUser(JSON.parse(user[1]));
                // console.log(token[1]);

                // Configura o token do header globalmente para todas as requisições
                api.defaults.headers.common['Authorization'] = `Bearer ${token[1]}`;
            }

            // setUser(example.user);

            // Aplicação pronta para renderizar
            setLoading(false);
        }

        loadStoragedData();
    }, []);

    const signIn = useCallback(async (data: SignInProps) => {
        setLoading(true);
      try{
            const response = await api.post('user/login', data);

            const { token, user } = response.data;

            await AsyncStorage.multiSet([
                ['@SmartStorage:token', token],
                ['@SmartStorage:user', JSON.stringify(user)]
            ]);

            // Configura o token do header globalmente para todas as requisições
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            // Armazena a resposta do back no data
            setUser(user);
        } catch(err){
            alert(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    const updateUser = useCallback(async (user: User) => {
        // Armazena esse user atualizado no AsyncStorage
        try {
            const response = await api.patch('User/update', user);

            await AsyncStorage.setItem('@SmartStorage:user', JSON.stringify(user));

            // Armazena esse user atualizado no state
            setUser(response.data);
        }catch(err) {
            alert(err.message);
        }
    }, []);

    const signOut = useCallback(async () => {
        await AsyncStorage.multiRemove(['@SmartStorage:token', '@SmartStorage:user']);

        setUser(null);
    }, []);

    // TODO: Tentar usar esse state
    const value = useMemo(() => ({ 
        user, 
        signIn, 
        signOut, 
        updateUser,
        loading 
    }), [user, loading]);

    // Retornamos um React component que oferece certos dados para os componentes filhos
    // Através do Provider do contexto que criamos antes
    return(
        <AuthContext.Provider value={value}>
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