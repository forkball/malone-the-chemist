interface LibError {
    status: number;
    body: {
        title: string;
        message: string;
    }
}