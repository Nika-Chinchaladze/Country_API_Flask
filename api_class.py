import requests


class GetCountry:
    def __init__(self):
        self.my_api = "https://restcountries.com/v3.1/region/"
        self.country_api = "https://restcountries.com/v2/name/"

    def get_data(self, region):
        respond = requests.get(url=f"{self.my_api}{region.lower()}")
        data = respond.json()
        result = []
        for country in data:
            try:
                answer = {
                    "country": country["name"]["common"],
                    "population": country["population"],
                    "region": country["region"],
                    "capital": country["capital"][0],
                    "flag": country["flags"]["png"]
                }
                result.append(answer)
            except KeyError:
                pass
        return result

    def each_country(self, country):
        respond = requests.get(url=f"{self.country_api}{country.lower()}")
        data = respond.json()[0]
        answer = {
            "name": data["name"],
            "native_name": data["nativeName"],
            "population": data["population"],
            "region": data["region"],
            "sub_region": data["subregion"],
            "capital": data["capital"],
            "flag": data["flags"]["png"],
            "currency": data["currencies"][0]["name"]
        }
        return answer
