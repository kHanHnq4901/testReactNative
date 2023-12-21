export function isValidEmail(email: string): boolean {
    if (email === '') {
      return true;
    } else {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }
  }
  
export function isValidPassword(password: string): boolean {
    if (password.length >= 3 || password.length == 0) {
      return true;
    } else {
      return false;
    }
}
export function isValidRePassword(repassword:string): boolean {
    if (repassword.length >= 3 || repassword.length == 0) {
      return true;
    } else {
      return false;
    }
}