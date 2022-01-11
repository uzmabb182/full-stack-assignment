from flask import Flask, render_template, jsonify
import pandas as pd
import sqlalchemy
from sqlalchemy import create_engine
# Note you need to create a config.py file 
from config import db_username, db_password


# Create app instance
app = Flask(__name__)
# Database Setup using SQLAlchmy ORM
engine = create_engine(f"postgresql://{db_username}:{db_password}@localhost:5432/education_db")
conn = engine.connect()


@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/plotly')
def plotly():
    return render_template('index.html')


@app.route("/search_state/<state>")
def state_search(state):

    df5 = pd.read_sql(f"""SELECT state_abbr, state, 
        ROUND(AVG(per_capita_income), 2) AS avg_per_capita_income,
        ROUND(AVG(median_age), 2) AS avg_median_age, 
        ROUND(AVG(population), 2) AS avg_population, 
        ROUND(AVG(poverty_count), 2) AS avg_poverty_count, 
        ROUND(AVG(bachelors_or_higher_2019), 2) AS avg_bachelors_or_higher_2019
        FROM fips_census_education
 		WHERE state = '{state}'
		GROUP BY state_abbr, state
        ORDER BY state;
        """,conn)
