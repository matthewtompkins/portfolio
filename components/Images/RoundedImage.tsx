import Image from "next/image";

interface RoundedImageProps {
    img: MT.ImageProps;
}

const RoundedImage: React.FC<RoundedImageProps> = ({ img }): JSX.Element => {
    return (
        <div className='overflow-hidden rounded-lg'>
            <Image {...img} />
        </div>
    );
};

export default RoundedImage;