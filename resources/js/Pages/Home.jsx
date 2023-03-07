import { usePage } from "@inertiajs/react";
import React from "react";
import Calltoaction from "../components/Calltoaction";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IconsGrid from "../components/IconsGrid";
import Nav from "../components/Nav";
import Showcase from "../components/Showcase";
import Testimonials from "../components/Testimonials";

export default function Home() {
    const {flash} = usePage().props;
    return (
        <>
            <Nav></Nav>
            <Header>
                {flash.edit && (
                    <div class="alert alert-danger" role={"alert"}>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="alert"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                        {flash.edit}
                    </div>
                )}
            </Header>
            <IconsGrid></IconsGrid>
            <Showcase></Showcase>
            <Testimonials></Testimonials>
            <Calltoaction></Calltoaction>
            <Footer></Footer>
        </>
    );
}
