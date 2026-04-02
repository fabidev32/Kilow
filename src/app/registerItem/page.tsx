import { registerItem } from "services/api/routes/products";
import RegisterItem from "components/template/registerItem";

//Eu tenho a minha página que vai exibir para o usuário
//Todavia, para consegui enviar os dados para o backend,
//eu preciso acessar os dados que o usuário digitou
//É onde a função registerItem entra, 
// ela é responsável por enviar os dados para o backend

export default function Page() {
  const handleSave = async (data) => {
    "use server"; // Se estiver usando Server Actions do Next.js
    const result = await registerItem(data);
    console.log("Item salvo:", result);
  };

  return <RegisterItem onSave={handleSave} />;
}