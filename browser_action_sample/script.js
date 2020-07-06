chrome.extension.onMessage.addListener( (message, sender, sendResponse) => {
    // このファイルのデバッグ時には拡張機能を実行するページでDeveloper Toolを開いて
    // 以下の行を有効化しておけばOK
    // debugger;
    if (message == "Action") {
        console.log(`test at ${document.title}`);
    }
});


