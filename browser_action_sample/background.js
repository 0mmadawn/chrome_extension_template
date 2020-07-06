chrome.browserAction.onClicked.addListener( (tab) => {
    // このファイルのデバッグ時には拡張機能のバックグラウンドページにて検証
    chrome.tabs.sendMessage(tab.id, "Action");
});