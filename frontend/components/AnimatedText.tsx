export function AnimatedText({ text }: { text: string }) {
  return (
    <h1 className="text-6xl md:text-8xl font-extrabold">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
        {text}
      </span>
    </h1>
  );
}
