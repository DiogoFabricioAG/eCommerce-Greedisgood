export type AccountType = {
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    number: string
}

export type ResponseType = {
    status: number;
    message: string;
};

export type LoginType = {
    email: string,
    password: string
}

export type ResponseLoginType = {
    username: string,
    email: string,
    isClient: boolean
}