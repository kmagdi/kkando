export class Helper {
    static scrollToTop = () => {
        document.getElementsByTagName('html')[0].setAttribute('smooth','false');
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.getElementsByTagName('html')[0].setAttribute('smooth','true');
    }
}