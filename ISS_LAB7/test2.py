import pandas as pd
from IPython.display import display

airbnb = pd.read_csv('listings.csv')
display(airbnb['price'] < 150)