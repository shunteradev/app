var SupportedLanguage;
(function (SupportedLanguage) {
    SupportedLanguage["English"] = "en";
    SupportedLanguage["Japanese"] = "jp";
})(SupportedLanguage || (SupportedLanguage = {}));
var selectedLanguage = SupportedLanguage.English;
var elementHeader = document.getElementById("header");
var elementPrivacyPolicy = document.getElementById("privacy");
function localize() {
    switch (selectedLanguage) {
        case SupportedLanguage.English:
            english();
            break;
        case SupportedLanguage.Japanese:
            japanese();
            break;
    }
}
function english() {
    selectedLanguage = SupportedLanguage.English;
    elementHeader.innerHTML = "Password Manager";
    elementPrivacyPolicy.innerHTML = "Privacy Policy";
    elementPrivacyPolicy.href = "./doc/privacy/en";
}
function japanese() {
    selectedLanguage = SupportedLanguage.Japanese;
    elementHeader.innerHTML = "Password Manager - パスワード管理";
    elementPrivacyPolicy.innerHTML = "プライバシーポリシー";
    elementPrivacyPolicy.href = "./doc/privacy/jp";
}
