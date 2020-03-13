const  build_config = require('./build_config.json');
let newConfig = {
    ...build_config ,
    "background_color": "#3266B9",
    "menu_icon_color": "#3266B9",
    "menu_text_color": "#3266B9",
    "text_color": "#ffffff",
}
export const BuildConfig = newConfig;