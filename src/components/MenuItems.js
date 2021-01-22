import React from "react";
import notFound from "../assets/not-found.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuItems = ({ categories, addProduct, setAddProduct }) => {
    // cette fonction permet d'ajouter un produit au panier
    const handleAddProduct = (meal) => {
        console.log({ meal });

        // crée une copie du tableau 'addProduct'
        const newAddProduct = [...addProduct];

        let indexProduct = null;

        // verifie si 'newAddProduct' contient un objet avec l'id 'meal.id'
        for (let i = 0; i < newAddProduct.length; i++) {
            // si l'id du produit correspond à celle de 'meal.id'...
            if (newAddProduct[i].id === meal.id) {
                /* attribuer à la variable 'indexProduct' la valeur de l'index (permettra
            de vérifier si le produit est déja dans le panier) */
                indexProduct = i;
                break;
            }
        }

        // si la valeur de 'indexProduct' n'est pas null (si le produit est dans le panier)
        if (indexProduct !== null) {
            // incrémenter la quantité
            newAddProduct[indexProduct].quantity++;
        } else {
            // sinon ajouter un nouvel objet au tableau 'newAddProduct' (ajouter un nouveau produit au panier)
            newAddProduct.push({
                id: meal.id,
                title: meal.title,
                price: meal.price,
                quantity: 1,
            });
        }

        // mettre à jour 'newProduct'
        setAddProduct(newAddProduct);
    };

    return (
        <section>
            {categories.map((item, index) => {
                // si toutes les entrées du tableau 'categories' existent
                if (item && item.meals && item.meals.length) {
                    // retourner toutes les infos
                    return (
                        <div key={index} className="--MenuItems--wrapper">
                            <div className="--MenuItems--items">
                                <h2>{item.name}</h2>
                                <div className="--MenuItems--meals">
                                    {item.meals.map((meal, index) => {
                                        return (
                                            <>
                                                <div
                                                    key={index}
                                                    className="--MenuItems--card"
                                                    /* ajoute un nouveau produit au panier - pour pouvoir récupérer les clés de l'objet
                                       'meal', on le passe en paramèttre à la fonction 'handleAddProduct' */
                                                    onClick={() =>
                                                        handleAddProduct(meal)
                                                    }
                                                >
                                                    <div>
                                                        <h3>{meal.title}</h3>
                                                        <p className="--MenuItems--description">
                                                            {/* si la longueur de la description dépasse 40 caractères, on affiche
                                                            que les 40 premiers sinon, on ajoute toute la description */}
                                                            {meal.description
                                                                .length > 40
                                                                ? meal.description.substring(
                                                                      0,
                                                                      40
                                                                  ) + "..."
                                                                : meal.description}
                                                        </p>
                                                        <p className="--MenuItems--price">
                                                            {meal.price}€{" "}
                                                            {meal.popular ===
                                                                true && (
                                                                <>
                                                                    <FontAwesomeIcon
                                                                        icon="star"
                                                                        className="--star"
                                                                    ></FontAwesomeIcon>
                                                                    <span className="--MenuItems--rate">
                                                                        Populaire
                                                                    </span>
                                                                </>
                                                            )}{" "}
                                                        </p>
                                                    </div>

                                                    {meal.picture ? (
                                                        <img
                                                            className="--MenuItems--picture"
                                                            src={meal.picture}
                                                            alt=""
                                                        />
                                                    ) : (
                                                        <img
                                                            className="--MenuItems--picture"
                                                            src={notFound}
                                                            alt=""
                                                        />
                                                    )}
                                                </div>
                                            </>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                }

                // sinon on retourne null
                return null;
            })}
        </section>
    );
};

export default MenuItems;
