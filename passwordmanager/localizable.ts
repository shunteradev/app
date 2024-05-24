
enum SupportedLanguage {
    English = "en",
    Japanese = "jp"
}

let selectedLanguage: SupportedLanguage = SupportedLanguage.English;

const elementHeader = document.getElementById("header") as HTMLElement;
const elementPrivacyPolicy = document.getElementById("privacy") as HTMLLinkElement;

function localize(): void {
    switch (selectedLanguage) {
        case SupportedLanguage.English: english(); break;
        case SupportedLanguage.Japanese: japanese(); break;
    }
}

function english(): void {
    selectedLanguage = SupportedLanguage.English;
    elementHeader.innerHTML = "Password Manager";
    elementPrivacyPolicy.innerHTML = "Privacy Policy";
    elementPrivacyPolicy.href = "./doc/privacy/en";
}

function japanese(): void {
    selectedLanguage = SupportedLanguage.Japanese;
    elementHeader.innerHTML = "Password Manager - パスワード管理";
    elementPrivacyPolicy.innerHTML = "プライバシーポリシー";
    elementPrivacyPolicy.href = "./doc/privacy/jp";
}

