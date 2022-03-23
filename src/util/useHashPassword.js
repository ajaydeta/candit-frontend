import bcrypt from 'bcryptjs';

async function useHashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const passHashed = await bcrypt.hash(password, salt);
    return passHashed;
}

async function useValidatePassword(passPlain, passHashed) {
    const validPassword = await bcrypt.compare(passPlain, passHashed);
    return validPassword
}

export {
    useHashPassword,
    useValidatePassword
}