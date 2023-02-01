from flask import Flask, render_template, request
from api_class import GetCountry


app = Flask(__name__)


@app.route("/")
def home_page():
    return render_template("index.html")


@app.route("/search/<path:region>")
def search_page(region):
    tool = GetCountry()
    country_info = tool.get_data(region=region)
    return render_template("search.html", country_list=country_info)


@app.route("/country")
def country_page():
    country = request.args.get("country")
    tool = GetCountry()
    chosen_country = tool.each_country(country=country)
    return render_template("country.html", country=chosen_country)


if __name__ == "__main__":
    app.run(debug=True)
