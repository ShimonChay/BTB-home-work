interface user {
    username: string;
    password: string;
    isAdmin: boolean;
}

export const USERS: user[] = [  
    {
        username: 'Shimon',
        password: 'admin123',
        isAdmin: true
    }, 
    {
        username: 'Chay',
        password: 'user123',
        isAdmin: false
    }
]