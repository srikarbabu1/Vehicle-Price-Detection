# Car-Detection-Prediction-Model

### INTRODUCTION 
Vehicle damage detection is a critical area of research in the automotive industry 
that aims to develop methods for detecting and quantifying vehicle damage, 
especially after an accident or collision. This technology is crucial for insurance 
companies as well as resell the value of the car as it helps to assess the extent of damage to a vehicle and determine the cost of repairs or replacement and also have a particular resale value of the undamaged car. One of the critical factors that insurance companies consider when assessing the extent of vehicle damage is the condition of the vehicle for resale This is because the resale value of a vehicle significantly affects the amount of compensation that the insurance company will provide. 

Therefore, it is essential for companies to consider carefully the resale conditions of a damaged vehicle when assessing the extent of damage and determining the compensation amount. This can include factors such as the age of the car, its overall condition, the mileage, and the availability of replacement parts.

### Industrial Applications of Car Detection and Price Prediction Model 


#### Automotive Dealerships: 
Car dealerships can utilize a car detection and price prediction model to automate the process of valuing used cars. By analyzing various factors such as the car's make, model, mileage, condition, and market trends, the model can provide accurate price predictions. This can help dealerships in setting competitive prices for their used car inventory and facilitate faster transactions.

#### Car Rental Companies: 
Car rental companies can benefit from a car detection and price prediction model by automating their fleet management and pricing strategies. The model can assist in identifying the make and model of each car in the rental fleet, predicting their future depreciation, and suggesting optimal rental prices based on factors such as demand, seasonality, and market trends. This can help rental companies optimize their revenue and maximize the utilization of their fleet.

#### Insurance Companies: 
Insurance companies can leverage a car detection and price prediction model to streamline the claims assessment process. The model can automatically detect and analyze car damage from images or videos, estimate the repair costs, and predict the fair market value of the damaged vehicle. This can expedite the claims settlement process and improve accuracy in assessing the insurance payouts.

## Price Prediction 

Gathering Data :
Collected a decent amount of data from various sources and merged it together, to form a dataset of around 2500 items.

Feature Engineering :
Cleaned the data and converted the Data into trainable format.
Removed the Columns which are not of use and not playing any role in price prediction.

Exploratory Data Analysis :
Explored the whole dataset and performed some EDA to get insights into the Data.
Plots Graphs and charts to visualize the data properly.\

Creating  the Pipeline which includes Scaling, One Hot Encoding, training, and validating the Model.

Training  the model using various Regression Algorithm like Linear Regression, Ridge and Lasso Regression, Decision Tree Regressor, Bagging and Boosting Algorithm, XgBoost Regressor

Testing  the Model and checking out the MSE Loss to find out the best model.

### LINEAR REGRESSION  

Linear regression algorithm shows a linear relationship between a dependent (y) and one or more independent (y) variables, hence called as linear regression. Since linear regression shows the linear relationship, which means it finds how the value of the dependent variable is changing according to the value of the independent variable.

### DECISION TREE REGRESSION 

A decision tree is a non-parametric supervised learning algorithm, which is utilized for both classification and regression tasks. It has a hierarchical, tree structure, which consists of a root node, branches, internal nodes, and leaf nodes.

### RANDOM FORREST 

Random Forest is a popular machine learning algorithm that belongs to the supervised learning technique. It can be used for both Classification and Regression problems in ML. It is based on the concept of ensemble learning, which is a process of combining multiple classifiers to solve a complex problem and to improve the performance of the model.

### XGBOOST 

XGBoost is an optimized distributed gradient boosting library designed for efficient and scalable training of machine learning models. It is an ensemble learning method that combines the predictions of multiple weak models to produce a stronger prediction. XGBoost has built-in support for parallel processing, making it possible to train models on large datasets in a reasonable amount of time.











