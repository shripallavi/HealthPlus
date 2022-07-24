# from crypt import methods
from matplotlib.pyplot import title
from flask import Flask
from flask import request
from flask_cors import CORS
import json
import csv
import pandas as pd
import numpy as np
from collections import defaultdict
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
import metadata_parser
import urllib
from urllib.request import Request, urlopen
import requests
from bs4 import BeautifulSoup
from requests.adapters import HTTPAdapter

app = Flask(__name__)
CORS(app)
# request = requests.get('/symptoms')

final = []
syms = []
disease_pred = []
details = {}
fi = dict()

@app.route('/symptoms', methods = ['POST'])
def symptoms():
    # inputs = request.get_json()
    syms = request.data
    syms = syms.decode("utf-8")
    print("\n")
    print(syms)
    print("\n")
    syms = syms[2:-2]
    syms = syms.split('","')
    for i in range(len(syms)):
        print(syms[i])
    
    k = ""
    for i in range(len(syms)):
        k = syms[i]
        # print(k)
        fi[i] = k
        print(fi)
    return fi

@app.route("/prediction", methods = ['GET'])
def prediction():
    sym = ["Heberden's node","Murphy's sign","Stahli's line","abdomen acute","abdominal bloating","abdominal tenderness","abnormal sensation","abnormally hard consistency","abortion","abscess bacterial","absences finding","achalasia","ache","adverse effect","adverse reaction","agitation","air fluid level","alcohol binge episode","alcoholic withdrawal symptoms","ambidexterity","angina pectoris","anorexia","anosmia","aphagia","apyrexial","arthralgia","ascites","asterixis","asthenia","asymptomatic","ataxia","atypia","aura","awakening early","barking cough","bedridden","behavior hyperactive","behavior showing increased motor activity","blackout","blanch","bleeding of vagina","bowel sounds decreased","bradycardia","bradykinesia","breakthrough pain","breath sounds decreased","breath-holding spell","breech presentation","bruit","burning sensation","cachexia","cardiomegaly","cardiovascular event","cardiovascular finding","catatonia","catching breath","charleyhorse","chest discomfort","chest tightness","chill","choke","cicatrisation","clammy skin","claudication","clonus","clumsiness","colic abdominal","consciousness clear","constipation","coordination abnormal","cough","cushingoid facies","cushingoidÃƒ?Ã‚Â habitus","cyanosis","cystic lesion","debilitation","decompensation","decreased body weight","decreased stool caliber","decreased translucency","diarrhea","difficulty","difficulty passing urine","disequilibrium","distended abdomen","distress respiratory","disturbed family","dizziness","dizzy spells","drool","drowsiness","dullness","dysarthria","dysdiadochokinesia","dysesthesia","dyspareunia","dyspnea","dyspnea on exertion","dysuria","ecchymosis","egophony","elation","emphysematous change","energy increased","enuresis","erythema","estrogen use","excruciating pain","exhaustion","extrapyramidal sign","extreme exhaustion","facial paresis","fall","fatigability","fatigue","fear of falling","fecaluria","feces in rectum","feeling hopeless","feeling strange","feeling suicidal","feels hot/feverish","fever","flare","flatulence","floppy","flushing","focal seizures","food intolerance","formication","frail","fremitus","frothy sputum","gag","gasping for breath","general discomfort","general unsteadiness","giddy mood","gravida 0","gravida 10","green sputum","groggy","guaiac positive","gurgle","hacking cough","haemoptysis","haemorrhage","hallucinations auditory","hallucinations visual","has religious belief","headache","heartburn","heavy feeling","heavy legs","hematochezia","hematocrit decreased","hematuria","heme positive","hemianopsia homonymous","hemiplegia","hemodynamically stable","hepatomegaly","hepatosplenomegaly","hirsutism","history of - blackout","hoard","hoarseness","homelessness","homicidal thoughts","hot flush","hunger","hydropneumothorax","hyperacusis","hypercapnia","hyperemesis","hyperhidrosis disorder","hyperkalemia","hypersomnia","hypersomnolence","hypertonicity","hyperventilation","hypesthesia","hypoalbuminemia","hypocalcemia result","hypokalemia","hypokinesia","hypometabolism","hyponatremia","hypoproteinemia","hypotension","hypothermia, natural","hypotonic","hypoxemia","immobile","impaired cognition","inappropriate affect","incoherent","indifferent mood","intermenstrual heavy bleeding","intoxication","irritable mood","jugular venous distention","labored breathing","lameness","large-for-dates fetus","leftÃƒ?Ã‚Â atrialÃƒ?Ã‚Â hypertrophy","lesion","lethargy","lightheadedness","lip smacking","loose associations","low back pain","lung nodule","macerated skin","macule","malaise","mass in breast","mass of body structure","mediastinal shift","mental status changes","metastatic lesion","milky","moan","monoclonal","monocytosis","mood depressed","moody","motor retardation","muscle hypotonia","muscle twitch","myalgia","mydriasis","myoclonus","nasal discharge present","nasal flaring","nausea","nausea and vomiting","neck stiffness","neologism","nervousness","night sweat","nightmare","no known drug allergies","no status change","noisy respiration","non-productive cough","nonsmoker","numbness","numbness of hand","oliguria","orthopnea","orthostasis","out of breath","overweight","pain","pain abdominal","pain back","pain chest","pain foot","pain in lower limb","pain neck","painful swallowing","pallor","palpitation","panic","pansystolic murmur","para 1","para 2","paralyse","paraparesis","paresis","paresthesia","passed stones","patient non compliance","pericardial friction rub","phonophobia","photophobia","photopsia","pin-point pupils","pleuritic pain","pneumatouria","polydypsia","polymyalgia","polyuria","poor dentition","poor feeding","posteriorÃƒ?Ã‚Â rhinorrhea","posturing","presence of q wave","pressure chest","previous pregnancies 2","primigravida","prodrome","productive cough","projectile vomiting","prostate tender","prostatism","proteinemia","pruritus","pulse absent","pulsusÃƒ?Ã‚Â paradoxus","pustule","qt interval prolonged","r wave feature","rale","rambling speech","rapid shallow breathing","red blotches","redness","regurgitates after swallowing","renal angle tenderness","rest pain","retch","retropulsion","rhd positive","rhonchus","rigor - temperature-associated observation","rolling of eyes","room spinning","satiety early","scar tissue","sciatica","scleralÃƒ?Ã‚Â icterus","scratch marks","sedentary","seizure","sensory discomfort","shooting pain","shortness of breath","side pain","sinus rhythm","sleeplessness","sleepy","slowing of urinary stream","sneeze","sniffle","snore","snuffle","soft tissue swelling","sore to touch","spasm","speech slurred","splenomegaly","spontaneous rupture of membranes","sputum purulent","st segment depression","st segment elevation","stiffness","stinging sensation","stool color yellow","stridor","stuffy nose","stupor","suicidal","superimposition","sweat","sweating increased","swelling","symptom aggravating factors","syncope","systolic ejection murmur","systolic murmur","t wave inverted","tachypnea","tenesmus","terrify","thicken","throat sore","throbbing sensation quality","tinnitus","tired","titubation","todd paralysis","tonic seizures","transaminitis","transsexual","tremor","tremor resting","tumor cell invasion","unable to concentrate","unconscious state","uncoordination","underweight","unhappy","unresponsiveness","unsteady gait","unwell","urge incontinence","urgency ofÃƒ?Ã‚Â micturition","urinary hesitation","urinoma","verbal auditory hallucinations","verbally abusive behavior","vertigo","vision blurred","vomiting","weepiness","weight gain","welt","wheelchair bound","wheezing","withdraw","worry","yellow sputum","itching","skin_rash","nodal_skin_eruptions","continuous_sneezing","shivering","chills","joint_pain","stomach_pain","acidity","ulcers_on_tongue","muscle_wasting","burning_micturition","spotting_ urination","weight_gain","anxiety","cold_hands_and_feets","mood_swings","weight_loss","restlessness","patches_in_throat","irregular_sugar_level","high_fever","sunken_eyes","breathlessness","sweating","dehydration","indigestion","yellowish_skin","dark_urine","loss_of_appetite","pain_behind_the_eyes","back_pain","abdominal_pain","diarrhoea","mild_fever","yellow_urine","yellowing_of_eyes","acute_liver_failure","fluid_overload","swelling_of_stomach","swelled_lymph_nodes","blurred_and_distorted_vision","phlegm","throat_irritation","redness_of_eyes","sinus_pressure","runny_nose","congestion","chest_pain","weakness_in_limbs","fast_heart_rate","pain_during_bowel_movements","pain_in_anal_region","bloody_stool","irritation_in_anus","neck_pain","cramps","bruising","obesity","swollen_legs","swollen_blood_vessels","puffy_face_and_eyes","enlarged_thyroid","brittle_nails","swollen_extremeties","excessive_hunger","extra_marital_contacts","drying_and_tingling_lips","slurred_speech","knee_pain","hip_joint_pain","muscle_weakness","stiff_neck","swelling_joints","movement_stiffness","spinning_movements","loss_of_balance","unsteadiness","weakness_of_one_body_side","loss_of_smell","bladder_discomfort","foul_smell_of urine","continuous_feel_of_urine","passage_of_gases","internal_itching","toxic_look_(typhos)","depression","irritability","muscle_pain","altered_sensorium","red_spots_over_body","belly_pain","abnormal_menstruation","dischromic _patches","watering_from_eyes","increased_appetite","family_history","mucoid_sputum","rusty_sputum","lack_of_concentration","visual_disturbances","receiving_blood_transfusion","receiving_unsterile_injections","coma","stomach_bleeding","distention_of_abdomen","history_of_alcohol_consumption","blood_in_sputum","prominent_veins_on_calf","palpitations","painful_walking","pus_filled_pimples","blackheads","scurring","skin_peeling","silver_like_dusting","small_dents_in_nails","inflammatory_nails","blister","red_sore_around_nose","yellow_crust_ooze"]
    inp = list(fi.values())

    df_pivoted = pd.read_csv("newdata.csv",encoding='cp1252')
    df_pivoted = df_pivoted.groupby('Source').sum()
    df_pivoted = df_pivoted.reset_index()
    df_pivoted.drop_duplicates(keep='first',inplace=True)
    cols = df_pivoted.columns
    cols = cols[2:]
    x = df_pivoted[cols]
    y = df_pivoted['Source']

    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.3, random_state=42)
    for i in range(len(sym)):
        if sym[i] in inp:
            sym[i] = 1 
        else:
            sym[i] = 0
    test = np.reshape(sym, (1, 525))

    mnb_tot = LogisticRegression(penalty='l2' ,solver= "newton-cg")
    mnb_tot = mnb_tot.fit(x, y)
    print(mnb_tot.score(x, y))
    disease_pred = mnb_tot.predict(test)
    # print(disease_pred)
    return disease_pred[0]

@app.route("/links", methods = ['GET'])
def links():
    # print(disease_pred)
    disease = prediction() 
    # disease = disease_pred[0]
    links = {}
    from googlesearch import search
    general = []
    ayurvedic = []
    homeopathy = []
    query = disease
    counter1 = 0
    counter2 = 0
    counter3 = 0
    for j in search(query, tld="co.in", num=20, stop=12, pause=2):
        url = j
        headers = {'User-Agent': 'Mozilla/5.0'}
        request = Request(url, headers=headers)
        # html = urlopen(request).read()
        try:
            r = urllib.request.urlopen(request)
        except:
            continue
        # r = urllib.request.urlopen(j, headers={'User-Agent': 'Mozilla/5.0'})
        header = r.headers                           
        contentType = header.get_content_type()
        if(counter1 < 8 and contentType == 'text/html'):
            url1 = j
            m = []
            try:
                page1 = metadata_parser.MetadataParser(url1)
                title1 = page1.get_metadatas('title')
                desc1 = page1.get_metadatas('description')
                m = {j:{"description":desc1,"title":title1}}
                counter1 += 1
                general.append(m)
            except:
                continue
        elif(counter1 >= 8):
            break
        else:
            continue
    query = disease+" ayurvedic"
    for k in search(query, tld="co.in", num=20, stop=12, pause=2):
        url = k
        headers = {'User-Agent': 'Mozilla/5.0'}
        request = Request(url, headers=headers)
        # html = urlopen(request).read()
        try:
            r = urllib.request.urlopen(request)
        except:
            continue
        # r = urllib.request.urlopen(k, headers={'User-Agent': 'Mozilla/5.0'})
        header = r.headers                           
        contentType = header.get_content_type()
        if(counter2 < 8 and contentType == 'text/html'):
            url2 = k
            n = []
            try:
                page2 = metadata_parser.MetadataParser(url2)
                title2 = page2.get_metadatas('title')
                desc2 = page2.get_metadatas('description')
                n = {k:{"description":desc2,"title":title2}}
                counter2 += 1
                ayurvedic.append(n)
            except:
                continue
        elif(counter2 >= 8):
            break
        else:
            continue
    query = disease+" homeopathy"
    for l in search(query, tld="co.in", num=20, stop=12, pause=2):
        url = l
        headers = {'User-Agent': 'Mozilla/5.0'}
        request = Request(url, headers=headers)
        # html = urlopen(request).read()
        try:
            r = urllib.request.urlopen(request)
        except:
            continue
        # r = urllib.request.urlopen(l, headers={'User-Agent': 'Mozilla/5.0'})
        header = r.headers                           
        contentType = header.get_content_type()
        if(counter3 < 8 and contentType == 'text/html'):
            url3 = l
            o = []
            try:
                page3 = metadata_parser.MetadataParser(url3)
                title3 = page3.get_metadatas('title')
                desc3 = page3.get_metadatas('description')
                o = {l:{"description":desc3,"title":title3}}
                homeopathy.append(o)
                counter3 += 1
            except:
                continue
        elif(counter3 >= 8):
            break
        else:
            continue
        
    # print(general)
    # print(ayurvedic)
    # print(homeopathy)
    links = {"general":general,"ayurvedic":ayurvedic,"homeopathy":homeopathy}
    print(links)
    return links

@app.route("/info", methods = ['GET','POST'])
def info():
    inf = request.data
    inf = inf.decode("utf-8")
    print(inf)
    url = "https://www.nhp.gov.in" + inf[1:-1]
    print(url)
    req1 = requests.get(url)

    soup1 = BeautifulSoup(req1.content, "html.parser")

    try:
        overview = soup1.find("div", {"id": "Introduction"}).get_text()
    except:
        overview = ""
    try:
        symptoms = soup1.find("div", {"id": "Symptoms"}).get_text()
    except:
        symptoms = ""
    try:
        causes = soup1.find("div", {"id": "Causes"}).get_text()
    except:
        causes = ""
    try:
        management = soup1.find("div", {"id": "Diagnosis"}).get_text()
    except:
        management = ""
    try:
        diagnosis = soup1.find("div", {"id": "Management"}).get_text()
    except:
        diagnosis = ""
   
    details = {"overview":overview, "symptoms":symptoms, "causes":causes, "management":management, "diagnosis":diagnosis}
    print(details)
    return details  


if __name__ == "__main__":
    app.run(debug=True)

