import { DefaultStorageEnum } from '../enum/default-storage.enum'
import { ILoginMaded } from '../interfaces/login.interface';
import { removeFromStorage, saveItemToStorage } from '../utils/storage'

export const useLogout = () => {
  async function doLogout() {
    try {
      removeFromStorage(DefaultStorageEnum.APP_USER_TOKEN)
      removeFromStorage(DefaultStorageEnum.APP_USER_DATA)
      removeFromStorage(DefaultStorageEnum.APP_USER_TOKEN_EXPIRES)
    } catch (error) {
      console.error('Erro ao efetuar logout:', error)
    }
  }

  async function doLogin(user: ILoginMaded) {
    try {
      saveItemToStorage(DefaultStorageEnum.APP_USER_TOKEN, user.token);
      saveItemToStorage(DefaultStorageEnum.APP_USER_DATA, user.user);
      saveItemToStorage(
          DefaultStorageEnum.APP_USER_TOKEN_EXPIRES,
          user.expires_date
      );
    } catch (error) {
      console.log(error);
      
    }
  }

  return { doLogout, doLogin }
}