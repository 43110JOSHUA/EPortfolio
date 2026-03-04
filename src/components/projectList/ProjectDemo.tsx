interface Props {
  src: string;
}

const isImage = (src: string) => /\.(png|jpe?g|gif|webp|svg)$/i.test(src);

const ProjectDemo = ({ src }: Props) => {
  const style = { borderRadius: "1.2rem" };
  return (
    <div>
      {isImage(src) ? (
        <img
          src={src}
          className="img-fluid shadow-lg"
          width="280"
          height="485"
          style={style}
        />
      ) : (
        <video
          src={src}
          className="img-fluid shadow-lg"
          autoPlay
          loop
          muted
          playsInline
          width="280"
          height="485"
          style={style}
        />
      )}
    </div>
  );
};

export default ProjectDemo;
