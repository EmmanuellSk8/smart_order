export default function SoundNotification() {
  const audio = new Audio("/sounds/soundNotification.webm");
  audio.play().catch((err) => {
    console.warn("No se pudo reproducir el audio:", err);
  });
}