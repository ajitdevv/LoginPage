export const saveUser = (data) => {
    try {
        localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
        console.error("Storage Error:", error);
    }
};

export const getUser = () => {
    try {
        const data = localStorage.getItem("user");
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error("Read Error:", error);
        return null;
    }
};