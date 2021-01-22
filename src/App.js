import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Content from "./components/Content";
import Header from "./components/Header";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faMinus, faPlus, faStar);

const App = () => {
    // ce state va permettre de stocker les donées envoyées par le serveur dans 'data'
    const [data, setData] = useState({ categories: [], restaurant: {} });
    // ce state va permettre de gérer le chargement de la page
    const [isLoading, setIsLoading] = useState(true);
    // ce state va permettre d'ajouter des produits dans le panier
    const [addProduct, setAddProduct] = useState([]);

    // 'useEffect' va se déclancher une seule fois au chargement de l'app
    useEffect(() => {
        const getData = async () => {
            try {
                // requête vers le serveur
                const response = await axios.get(
                    "https://api-deliveroo-backend.herokuapp.com/"
                );
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error");
            }
        };
        // pour que le code soit executé il faut appeler la fonction 'getData'
        getData();
    }, []);

    console.log(data);

    return (
        <>
            {isLoading === true ? (
                <p className="--loading">En cours de chargement...</p>
            ) : (
                <>
                    <Header />
                    <main>
                        <Content
                            data={data}
                            categories={data.categories}
                            addProduct={addProduct}
                            setAddProduct={setAddProduct}
                        />
                    </main>
                </>
            )}
        </>
    );
};

export default App;
