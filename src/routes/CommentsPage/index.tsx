import CarSection from "../../components/CarSection";
import CommentSection from "../../components/CommentSection";
import FooterComments from "../../components/FooterComments";
import HeaderComments from "../../components/HeaderComments";
import './styles.css'

export default function CommentsPage(){
    return(
        <>
        <HeaderComments/>
        <main>
            <section className="ct-car-container">
                <CarSection/>
            </section>
            <section className="ct-comment-container">
                <CommentSection/>
            </section>
            <footer>
                <FooterComments/>
            </footer>
        </main>
        </>
    );
}