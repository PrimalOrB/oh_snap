import coverImage from '../../assets/cover/cover-image.jpg'

const About = () => {
    return (
        <section>
            <h1 className="my-5">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />

        </section>
    )
}

export default About