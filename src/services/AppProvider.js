import { CartProvider } from "./CartContext";
import { DataProvider } from "./DataContext";

export function AppProvider({children}) {
    return (
        <DataProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </DataProvider>
    );
}