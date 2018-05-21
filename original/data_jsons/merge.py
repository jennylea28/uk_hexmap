import json

master = open('populations.json')
wages = open('wages.json')
oow = open('oow.json')
unemployed = open('unemployed.json')
bus = open('bus-num.json')
youth_unemp = open('youth_unemp.json')

master_json = json.load(master)
wages_json = json.load(wages)
oow_json = json.load(oow)
unemployed_json = json.load(unemployed)
bus_json = json.load(bus)
youth_unemp_json = json.load(youth_unemp)

new_json = {}

for const in master_json:
    if const in wages_json.keys():
        wage = wages_json[const]['wage']
        master_json[const]['wage'] = wage
    else:
        master_json[const]['wage'] = ''

    if const in oow_json.keys():
        oow = oow_json[const]['percent_oow']
        master_json[const]['percent_oow'] = oow
    else:
        master_json[const]['percent_oow'] = ''

    if const in unemployed_json.keys():
        unemp = unemployed_json[const]['percent_unemployed']
        master_json[const]['percent_unemployed'] = unemp
    else:
        master_json[const]['percent_unemployed'] = ''

    if const in bus_json.keys():
        bus = bus_json[const]['num_bus']
        master_json[const]['num_bus'] = bus
    else:
        master_json[const]['num_bus'] = ''

    if const in youth_unemp_json.keys():
        youth_unemp = youth_unemp_json[const]['youth_unemp_rate']
        master_json[const]['youth_unemp_rate'] = youth_unemp
    else:
        master_json[const]['youth_unemp_rate'] = ''

    new_json[const] = {}
    new_json[const]['id'] = master_json[const]['id']
    new_json[const]['pop_19_percent'] = round(float(master_json[const]['pop0_19']) / float(master_json[const]['popTotal']), 5)
    new_json[const]['pop_2064_percent'] = round(float(master_json[const]['pop20_64']) / float(master_json[const]['popTotal']), 5)
    new_json[const]['pop_65_percent'] = round(float(master_json[const]['pop65']) / float(master_json[const]['popTotal']), 5)
    new_json[const]['wage'] = master_json[const]['wage']
    new_json[const]['percent_oow'] = master_json[const]['percent_oow']
    new_json[const]['percent_unemployed'] = master_json[const]['percent_unemployed']
    new_json[const]['num_bus'] = master_json[const]['num_bus']
    new_json[const]['youth_unemp_rate'] = master_json[const]['youth_unemp_rate']

print new_json

saveto = open('all-data.json', 'w')
json.dump(new_json, saveto)
