export const sendNotification = () => {
  Notification.requestPermission().then(function () {
    new Notification("New Notification", {
      body: "New trade was dectected.",
    });
  });
};
