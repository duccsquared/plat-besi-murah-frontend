export default function () {
  const notifications = useState("notifications", () => []);
  
  const showSuccess = (message, time = 5) => {
    const notif = { message: message, icon: "bi bi-check-circle", colour: "#22c55e" };
    notifications.value.push(notif);
    setTimeout(() => {
      notifications.value.shift();
    }, time * 1000);
  };

  const showError = (message, time = 5) => {
    const notif = { message: message, icon: "bi bi-slash-circle", colour: "#ef4444" };
    notifications.value.push(notif);
    setTimeout(() => {
      notifications.value.shift();
    }, time * 1000);
  };

  return { notifications, showSuccess, showError };
}