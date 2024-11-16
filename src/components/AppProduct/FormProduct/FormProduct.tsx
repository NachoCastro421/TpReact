import { Button, Form, FormControl, FormLabel } from "react-bootstrap"
import { useForm } from "../../../hooks/useForm"
import { FC } from "react"

interface IPropsFormProduct {
    handleAddProduct: Function;
}


export const FormProduct: FC<IPropsFormProduct> = ({ handleAddProduct }) => {

    const { handleChange, values, resetForm } = useForm({
        nombre: '',
        imagen: '',
        precio: 0
    })

    const handleSubmitForm = () => {
        handleAddProduct(values);
        resetForm();
    };

    return (
        <Form className="p-4 border rounded m-3">
            <Form.Group controlId="formNombre">
                <FormLabel>
                    Nombre
                </FormLabel>
                <FormControl
                    type="text"
                    name="nombre"
                    placeholder="Ingrese nombre del producto"
                    value={values.nombre}
                    onChange={handleChange}


                />
            </Form.Group>

            <Form.Group controlId="formNombre">
                <FormLabel>
                    Imagen
                </FormLabel>
                <FormControl
                    type="text"
                    name="imagen"
                    placeholder="Ingrese imagendel producto"
                    value={values.imagen}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="formNombre">
                <FormLabel>
                    Precio
                </FormLabel>
                <FormControl
                    type="number"
                    name="precio"
                    placeholder="Ingrese precio del producto"
                    value={values.precio}
                    onChange={handleChange}


                />
            </Form.Group>

            <div className= "d-flex justify-content-center mt-4">
                <Button onClick={handleSubmitForm} variant="primary"  >Enviar Producto</Button>
            </div>
        </Form>
    )
}
