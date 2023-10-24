import { configureStore } from "@reduxjs/toolkit";
import ticketes from "./ticketes";
const appStore=configureStore({
    reducer:{
        data: ticketes
    }
});
export default appStore;