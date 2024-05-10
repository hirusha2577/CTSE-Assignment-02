import App from './app';

import SubCategoryRoute from './routes/subCategory.route';

const app = new App([new SubCategoryRoute()]);

app.listen();
