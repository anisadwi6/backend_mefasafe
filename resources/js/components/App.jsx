// resources/js/components/App.jsx
import React from 'react';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';
import TermAgreement from './TermAgreement';

export default function App() {
    const [screen, setScreen] = React.useState('login');
    const [user, setUser] = React.useState(null);
    const [profile, setProfile] = React.useState(null);

    React.useEffect(() => {
        const savedToken = localStorage.getItem('mefasafe_token');
        const savedUser = localStorage.getItem('mefasafe_user');
        const savedProfile = localStorage.getItem('mefasafe_profile');

        if (savedToken && savedUser) {
            setUser(JSON.parse(savedUser));
            setProfile(savedProfile ? JSON.parse(savedProfile) : null);
            setScreen('dashboard');
        }
    }, []);

    const handleAuthSuccess = (nextUser, nextProfile) => {
        setUser(nextUser);
        setProfile(nextProfile);
        setScreen('dashboard');
    };

    const handleLogout = () => {
        localStorage.removeItem('mefasafe_token');
        localStorage.removeItem('mefasafe_user');
        localStorage.removeItem('mefasafe_profile');
        setUser(null);
        setProfile(null);
        setScreen('login');
    };

    if (screen === 'dashboard') {
        return <Dashboard user={user} profile={profile} onLogout={handleLogout} />;
    }

    if (screen === 'register') {
        return (
            <Register
                onAuthSuccess={handleAuthSuccess}
                onSwitchToLogin={() => setScreen('login')}
                onViewAgreement={() => setScreen('agreement')}
            />
        );
    }

    if (screen === 'agreement') {
        return (
            <TermAgreement
                onContinue={() => setScreen('register')}
                onBackToLogin={() => setScreen('login')}
            />
        );
    }

    return (
        <Login
            onAuthSuccess={handleAuthSuccess}
            onSwitchToRegister={() => setScreen('agreement')}
        />
    );
}