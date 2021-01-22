import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ addProduct, setAddProduct }) => {
    const cartEmpty = addProduct.length === 0;

    // calcule le total des items dans le panier
    const deliveryFees = 2.5;
    let subTotal = 0;
    for (let i = 0; i < addProduct.length; i++) {
        subTotal =
            // 'Number()' transforme une string en number
            subTotal + Number(addProduct[i].price) * addProduct[i].quantity;
    }

    const total = subTotal + deliveryFees;

    // cette fonction permettra d'enlever un item au compteur du panier
    const handleDecrement = (index) => {
        const newAddProduct = [...addProduct];
        // s'il y a qu'un seul produit dans le panier...
        if (newAddProduct[index].quantity === 1) {
            // retirer le produit lorsque le compteur arrive à zero
            newAddProduct.splice(index, 1);
        } else {
            // sinon, décrémenter le compteur
            newAddProduct[index].quantity--;
        }
        setAddProduct(newAddProduct);
    };

    // cette fonction permettra d'ajouter un item au compteur du panier
    const handleIncrement = (index) => {
        const newAddProduct = [...addProduct];
        newAddProduct[index].quantity++;
        setAddProduct(newAddProduct);
    };

    return (
        <div className="--Cart--wrapper">
            <button
                className={`--userSelect--disable ${
                    cartEmpty
                        ? "--Cart--disabled--btn"
                        : "--Cart--validate--btn"
                }`}
            >
                Valider mon panier
            </button>

            {cartEmpty ? (
                <div className="--Cart--empty">Votre panier est vide</div>
            ) : (
                <>
                    <div className="--Cart--card">
                        {addProduct.map((meal, index) => {
                            return (
                                <div key={index}>
                                    <div className="--Cart--elements">
                                        <div className="--Cart--counter">
                                            {/* on passe l'index du tableau 'addProduct' en argument à la
                                            fonction (permet d'accéder à la clé 'quantity') */}
                                            <FontAwesomeIcon
                                                icon="minus"
                                                className="--minus"
                                                onClick={() =>
                                                    handleDecrement(index)
                                                }
                                            >
                                                -
                                            </FontAwesomeIcon>

                                            <span className="--userSelect--disable">
                                                {meal.quantity}
                                            </span>

                                            <FontAwesomeIcon
                                                icon="plus"
                                                className="--plus"
                                                onClick={() =>
                                                    handleIncrement(index)
                                                }
                                            >
                                                +
                                            </FontAwesomeIcon>
                                        </div>

                                        <div className="--Cart--details">
                                            <div>
                                                <p className="--userSelect--disable">
                                                    {meal.title}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="--userSelect--disable">
                                                    {meal.price}€
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="--Cart--results">
                        <div className="--Cart-results--subtotal">
                            <div>
                                <p className="--userSelect--disable">
                                    Sous-total
                                </p>
                            </div>

                            <div>
                                <p className="--userSelect--disable">
                                    {subTotal.toFixed(2)}€
                                </p>
                            </div>
                        </div>

                        <div className="--Cart--results--deliveryfees">
                            <div>
                                <p className="--userSelect--disable">
                                    Frais de livraison
                                </p>
                            </div>

                            <div>
                                <p className="--userSelect--disable">
                                    {deliveryFees.toFixed(2)}€
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="--Cart--total">
                        <div className="--Cart--amount--total">
                            <div>
                                <p>
                                    <strong className="--userSelect--disable">
                                        Total
                                    </strong>
                                </p>
                            </div>

                            <div>
                                <p>
                                    <strong className="--userSelect--disable">
                                        {total.toFixed(2)}€
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
