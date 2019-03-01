import pandas as pd
import folium



janauba = folium.Map(
    location=[-15.8015936, -43.3103509],
    zoom_start=14
)

pontos = pd.read_csv("../pontos/linha1.csv")



kw = {
    'prefix': 'fa',
    'color': 'blue',
    'icon': 'bus'
}




print(pd.to_numeric(pontos["lat"], errors='coerce')) 
print(pd.to_numeric(pontos["long"], errors='coerce'))



for i, ponto in pontos.iterrows():
    p1 = pontos.iloc[i]
    print(p1)
    folium.Marker(
    location=[p1['lat'], p1['long']],
    popup='<h4>{}</h4><br/><span>{}</span><br/>{}<br/><h3>Horários</h3>{}'.format(ponto['rua'],ponto['posicao'],ponto['bairro'],ponto['horarios']),
    icon = folium.Icon('green')
    ).add_to(janauba)



janauba.save('mapa.html')
