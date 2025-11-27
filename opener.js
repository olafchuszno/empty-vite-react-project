function openCopilotPanel(primaryControl) {
  console.log('Copilot pane opening...');

  Xrm.App.sidePanes
    .createPane({
      title: 'SmartCRM Copilot',
      paneId: 'CopilotChatPane',
      canClose: true,
      width: 400,
    })
    .then((pane) => {
      pane.navigate({
        pageType: 'webresource',
        webresourceName: 'sb_dev_copilot_widget.html',
      });
      console.log('Copilot pane opened');
    })
    .catch((error) => {
      console.error('Failed to open Copilot pane:', error);
    });
}
