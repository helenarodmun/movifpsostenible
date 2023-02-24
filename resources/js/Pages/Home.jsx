import React from "react";
import Calltoaction from "../components/Calltoaction";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IconsGrid from "../components/IconsGrid";
import Nav from "../components/Nav";
import Showcase from "../components/Showcase";
import Testimonials from "../components/Testimonials";

export default function Welcome({ user }) {
    return (
        <>
            <Nav></Nav>
            <Header></Header>
            <IconsGrid></IconsGrid>
            <Showcase></Showcase>
            <Testimonials></Testimonials>
            <Calltoaction></Calltoaction>
            <Footer></Footer>
        </>
    );
}
