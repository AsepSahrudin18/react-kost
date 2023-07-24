import heroImage from '../../../assets/images/common/heroImage.png';  
import { StyledHeroImage } from './Hero.Styled';

export function Hero() {
    return (
        <>  
            {/**
             * image tidak boleh memiliki konten anak atau isi sehingga penulisannya seperti ini karena kalau tetap dipaksakan akan muncul error: Uncaught Error: img is a void element tag and must neither have children nor use dangerouslySetInnerHTML
             */}
            <StyledHeroImage src={heroImage} alt="Deskripsi gambar" /> 
        </>
    );
}