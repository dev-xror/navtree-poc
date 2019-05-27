const error = (format, ...args) => {
    let argIndex = 0;
    const message = 'Error: ' + format.replace(/%s/g, () => {
        return args[argIndex++];
    });

    if (console && console.error) {
        console.error(message);
    }
    try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this error to fire.
        throw new Error(message);
    } catch (e) {
        // Ignore
    }
};

export default error;