import React from 'react'
import './diseaseprediction.css'
import Select from 'react-select';
import { useState } from 'react';
import LinkDesc from './linkDesc';
import { ReactTinyLink } from 'react-tiny-link'
// import { OpenGraphProperties } from 'open-graph-scraper';
import { LinkPreview } from '@ashwamegh/react-link-preview';
import '@ashwamegh/react-link-preview/dist/index.css'



const Diseaseprediction = () => {
  const aquaticCreatures = [{'label': "Heberden's Node", 'value': "Heberden's node"}, {'label': "Murphy's Sign", 'value': "Murphy's sign"}, {'label': "Stahli's Line", 'value': "Stahli's line"}, {'label': 'Abdomen Acute', 'value': 'abdomen acute'}, {'label': 'Abdominal Bloating', 'value': 'abdominal bloating'}, {'label': 'Abdominal Tenderness', 'value': 'abdominal tenderness'}, {'label': 'Abnormal Sensation', 'value': 'abnormal sensation'}, {'label': 'Abnormally Hard Consistency', 'value': 'abnormally hard consistency'}, {'label': 'Abortion', 'value': 'abortion'}, {'label': 'Abscess Bacterial', 'value': 'abscess bacterial'}, {'label': 'Absences Finding', 'value': 'absences finding'}, {'label': 'Achalasia', 'value': 'achalasia'}, {'label': 'Ache', 'value': 'ache'}, {'label': 'Adverse Effect', 'value': 'adverse effect'}, {'label': 'Adverse Reaction', 'value': 'adverse reaction'}, {'label': 'Agitation', 'value': 'agitation'}, {'label': 'Air Fluid Level', 'value': 'air fluid level'}, {'label': 'Alcohol Binge Episode', 'value': 'alcohol binge episode'}, {'label': 'Alcoholic Withdrawal Symptoms', 'value': 'alcoholic withdrawal symptoms'}, {'label': 'Ambidexterity', 'value': 'ambidexterity'}, {'label': 'Angina Pectoris', 'value': 'angina pectoris'}, {'label': 'Anorexia', 'value': 'anorexia'}, {'label': 'Anosmia', 'value': 'anosmia'}, {'label': 'Aphagia', 'value': 'aphagia'}, {'label': 'Apyrexial', 'value': 'apyrexial'}, {'label': 'Arthralgia', 'value': 'arthralgia'}, {'label': 'Ascites', 'value': 'ascites'}, {'label': 'Asterixis', 'value': 'asterixis'}, {'label': 'Asthenia', 'value': 'asthenia'}, {'label': 'Asymptomatic', 'value': 'asymptomatic'}, {'label': 'Ataxia', 'value': 'ataxia'}, {'label': 'Atypia', 'value': 'atypia'}, {'label': 'Aura', 'value': 'aura'}, {'label': 'Awakening Early', 'value': 'awakening early'}, {'label': 'Barking Cough', 'value': 'barking cough'}, {'label': 'Bedridden', 'value': 'bedridden'}, {'label': 'Behavior Hyperactive', 'value': 'behavior hyperactive'}, {'label': 'Behavior Showing Increased Motor Activity', 'value': 'behavior showing increased motor activity'}, {'label': 'Blackout', 'value': 'blackout'}, {'label': 'Blanch', 'value': 'blanch'}, {'label': 'Bleeding Of Vagina', 'value': 'bleeding of vagina'}, {'label': 'Bowel Sounds Decreased', 'value': 'bowel sounds decreased'}, {'label': 'Bradycardia', 'value': 'bradycardia'}, {'label': 'Bradykinesia', 'value': 'bradykinesia'}, {'label': 'Breakthrough Pain', 'value': 'breakthrough pain'}, {'label': 'Breath Sounds Decreased', 'value': 'breath sounds decreased'}, {'label': 'Breath-Holding Spell', 'value': 'breath-holding spell'}, {'label': 'Breech Presentation', 'value': 'breech presentation'}, {'label': 'Bruit', 'value': 'bruit'}, {'label': 'Burning Sensation', 'value': 'burning sensation'}, {'label': 'Cachexia', 'value': 'cachexia'}, {'label': 'Cardiomegaly', 'value': 'cardiomegaly'}, {'label': 'Cardiovascular Event', 'value': 'cardiovascular event'}, {'label': 'Cardiovascular Finding', 'value': 'cardiovascular finding'}, {'label': 'Catatonia', 'value': 'catatonia'}, {'label': 'Catching Breath', 'value': 'catching breath'}, {'label': 'Charleyhorse', 'value': 'charleyhorse'}, {'label': 'Chest Discomfort', 'value': 'chest discomfort'}, {'label': 'Chest Tightness', 'value': 'chest tightness'}, {'label': 'Chill', 'value': 'chill'}, {'label': 'Choke', 'value': 'choke'}, {'label': 'Cicatrisation', 'value': 'cicatrisation'}, {'label': 'Clammy Skin', 'value': 'clammy skin'}, {'label': 'Claudication', 'value': 'claudication'}, {'label': 'Clonus', 'value': 'clonus'}, {'label': 'Clumsiness', 'value': 'clumsiness'}, {'label': 'Colic Abdominal', 'value': 'colic abdominal'}, {'label': 'Consciousness Clear', 'value': 'consciousness clear'}, {'label': 'Constipation', 'value': 'constipation'}, {'label': 'Coordination Abnormal', 'value': 'coordination abnormal'}, {'label': 'Cough', 'value': 'cough'}, {'label': 'Cushingoid Facies', 'value': 'cushingoid facies'}, {'label': 'Cushingoidãƒ?Ã‚Â\xa0Habitus', 'value': 'cushingoidÃƒ?Ã‚Â\xa0habitus'}, {'label': 'Cyanosis', 'value': 'cyanosis'}, {'label': 'Cystic Lesion', 'value': 'cystic lesion'}, {'label': 'Debilitation', 'value': 'debilitation'}, {'label': 'Decompensation', 'value': 'decompensation'}, {'label': 'Decreased Body Weight', 'value': 'decreased body weight'}, {'label': 'Decreased Stool Caliber', 'value': 'decreased stool caliber'}, {'label': 'Decreased Translucency', 'value': 'decreased translucency'}, {'label': 'Diarrhea', 'value': 'diarrhea'}, {'label': 'Difficulty', 'value': 'difficulty'}, {'label': 'Difficulty Passing Urine', 'value': 'difficulty passing urine'}, {'label': 'Disequilibrium', 'value': 'disequilibrium'}, {'label': 'Distended Abdomen', 'value': 'distended abdomen'}, {'label': 'Distress Respiratory', 'value': 'distress respiratory'}, {'label': 'Disturbed Family', 'value': 'disturbed family'}, {'label': 'Dizziness', 'value': 'dizziness'}, {'label': 'Dizzy Spells', 'value': 'dizzy spells'}, {'label': 'Drool', 'value': 'drool'}, {'label': 'Drowsiness', 'value': 'drowsiness'}, {'label': 'Dullness', 'value': 'dullness'}, {'label': 'Dysarthria', 'value': 'dysarthria'}, {'label': 'Dysdiadochokinesia', 'value': 'dysdiadochokinesia'}, {'label': 'Dysesthesia', 'value': 'dysesthesia'}, {'label': 'Dyspareunia', 'value': 'dyspareunia'}, {'label': 'Dyspnea', 'value': 'dyspnea'}, {'label': 'Dyspnea On Exertion', 'value': 'dyspnea on exertion'}, {'label': 'Dysuria', 'value': 'dysuria'}, {'label': 'Ecchymosis', 'value': 'ecchymosis'}, {'label': 'Egophony', 'value': 'egophony'}, {'label': 'Elation', 'value': 'elation'}, {'label': 'Emphysematous Change', 'value': 'emphysematous change'}, {'label': 'Energy Increased', 'value': 'energy increased'}, {'label': 'Enuresis', 'value': 'enuresis'}, {'label': 'Erythema', 'value': 'erythema'}, {'label': 'Estrogen Use', 'value': 'estrogen use'}, {'label': 'Excruciating Pain', 'value': 'excruciating pain'}, {'label': 'Exhaustion', 'value': 'exhaustion'}, {'label': 'Extrapyramidal Sign', 'value': 'extrapyramidal sign'}, {'label': 'Extreme Exhaustion', 'value': 'extreme exhaustion'}, {'label': 'Facial Paresis', 'value': 'facial paresis'}, {'label': 'Fall', 'value': 'fall'}, {'label': 'Fatigability', 'value': 'fatigability'}, {'label': 'Fatigue', 'value': 'fatigue'}, {'label': 'Fear Of Falling', 'value': 'fear of falling'}, {'label': 'Fecaluria', 'value': 'fecaluria'}, {'label': 'Feces In Rectum', 'value': 'feces in rectum'}, {'label': 'Feeling Hopeless', 'value': 'feeling hopeless'}, {'label': 'Feeling Strange', 'value': 'feeling strange'}, {'label': 'Feeling Suicidal', 'value': 'feeling suicidal'}, {'label': 'Feels Hot/Feverish', 'value': 'feels hot/feverish'}, {'label': 'Fever', 'value': 'fever'}, {'label': 'Flare', 'value': 'flare'}, {'label': 'Flatulence', 'value': 'flatulence'}, {'label': 'Floppy', 'value': 'floppy'}, {'label': 'Flushing', 'value': 'flushing'}, {'label': 'Focal Seizures', 'value': 'focal seizures'}, {'label': 'Food Intolerance', 'value': 'food intolerance'}, {'label': 'Formication', 'value': 'formication'}, {'label': 'Frail', 'value': 'frail'}, {'label': 'Fremitus', 'value': 'fremitus'}, {'label': 'Frothy Sputum', 'value': 'frothy sputum'}, {'label': 'Gag', 'value': 'gag'}, {'label': 'Gasping For Breath', 'value': 'gasping for breath'}, {'label': 'General Discomfort', 'value': 'general discomfort'}, {'label': 'General Unsteadiness', 'value': 'general unsteadiness'}, {'label': 'Giddy Mood', 'value': 'giddy mood'}, {'label': 'Gravida 0', 'value': 'gravida 0'}, {'label': 'Gravida 10', 'value': 'gravida 10'}, {'label': 'Green Sputum', 'value': 'green sputum'}, {'label': 'Groggy', 'value': 'groggy'}, {'label': 'Guaiac Positive', 'value': 'guaiac positive'}, {'label': 'Gurgle', 'value': 'gurgle'}, {'label': 'Hacking Cough', 'value': 'hacking cough'}, {'label': 'Haemoptysis', 'value': 'haemoptysis'}, {'label': 'Haemorrhage', 'value': 'haemorrhage'}, {'label': 'Hallucinations Auditory', 'value': 'hallucinations auditory'}, {'label': 'Hallucinations Visual', 'value': 'hallucinations visual'}, {'label': 'Has Religious Belief', 'value': 'has religious belief'}, {'label': 'Headache', 'value': 'headache'}, {'label': 'Heartburn', 'value': 'heartburn'}, {'label': 'Heavy Feeling', 'value': 'heavy feeling'}, {'label': 'Heavy Legs', 'value': 'heavy legs'}, {'label': 'Hematochezia', 'value': 'hematochezia'}, {'label': 'Hematocrit Decreased', 'value': 'hematocrit decreased'}, {'label': 'Hematuria', 'value': 'hematuria'}, {'label': 'Heme Positive', 'value': 'heme positive'}, {'label': 'Hemianopsia Homonymous', 'value': 'hemianopsia homonymous'}, {'label': 'Hemiplegia', 'value': 'hemiplegia'}, {'label': 'Hemodynamically Stable', 'value': 'hemodynamically stable'}, {'label': 'Hepatomegaly', 'value': 'hepatomegaly'}, {'label': 'Hepatosplenomegaly', 'value': 'hepatosplenomegaly'}, {'label': 'Hirsutism', 'value': 'hirsutism'}, {'label': 'History Of - Blackout', 'value': 'history of - blackout'}, {'label': 'Hoard', 'value': 'hoard'}, {'label': 'Hoarseness', 'value': 'hoarseness'}, {'label': 'Homelessness', 'value': 'homelessness'}, {'label': 'Homicidal Thoughts', 'value': 'homicidal thoughts'}, {'label': 'Hot Flush', 'value': 'hot flush'}, {'label': 'Hunger', 'value': 'hunger'}, {'label': 'Hydropneumothorax', 'value': 'hydropneumothorax'}, {'label': 'Hyperacusis', 'value': 'hyperacusis'}, {'label': 'Hypercapnia', 'value': 'hypercapnia'}, {'label': 'Hyperemesis', 'value': 'hyperemesis'}, {'label': 'Hyperhidrosis Disorder', 'value': 'hyperhidrosis disorder'}, {'label': 'Hyperkalemia', 'value': 'hyperkalemia'}, {'label': 'Hypersomnia', 'value': 'hypersomnia'}, {'label': 'Hypersomnolence', 'value': 'hypersomnolence'}, {'label': 'Hypertonicity', 'value': 'hypertonicity'}, {'label': 'Hyperventilation', 'value': 'hyperventilation'}, {'label': 'Hypesthesia', 'value': 'hypesthesia'}, {'label': 'Hypoalbuminemia', 'value': 'hypoalbuminemia'}, {'label': 'Hypocalcemia Result', 'value': 'hypocalcemia result'}, {'label': 'Hypokalemia', 'value': 'hypokalemia'}, {'label': 'Hypokinesia', 'value': 'hypokinesia'}, {'label': 'Hypometabolism', 'value': 'hypometabolism'}, {'label': 'Hyponatremia', 'value': 'hyponatremia'}, {'label': 'Hypoproteinemia', 'value': 'hypoproteinemia'}, {'label': 'Hypotension', 'value': 'hypotension'}, {'label': 'Hypothermia, Natural', 'value': 'hypothermia, natural'}, {'label': 'Hypotonic', 'value': 'hypotonic'}, {'label': 'Hypoxemia', 'value': 'hypoxemia'}, {'label': 'Immobile', 'value': 'immobile'}, {'label': 'Impaired Cognition', 'value': 'impaired cognition'}, {'label': 'Inappropriate Affect', 'value': 'inappropriate affect'}, {'label': 'Incoherent', 'value': 'incoherent'}, {'label': 'Indifferent Mood', 'value': 'indifferent mood'}, {'label': 'Intermenstrual Heavy Bleeding', 'value': 'intermenstrual heavy bleeding'}, {'label': 'Intoxication', 'value': 'intoxication'}, {'label': 'Irritable Mood', 'value': 'irritable mood'}, {'label': 'Jugular Venous Distention', 'value': 'jugular venous distention'}, {'label': 'Labored Breathing', 'value': 'labored breathing'}, {'label': 'Lameness', 'value': 'lameness'}, {'label': 'Large-For-Dates Fetus', 'value': 'large-for-dates fetus'}, {'label': 'Leftãƒ?Ã‚Â\xa0Atrialãƒ?Ã‚Â\xa0Hypertrophy', 'value': 'leftÃƒ?Ã‚Â\xa0atrialÃƒ?Ã‚Â\xa0hypertrophy'}, {'label': 'Lesion', 'value': 'lesion'}, {'label': 'Lethargy', 'value': 'lethargy'}, {'label': 'Lightheadedness', 'value': 'lightheadedness'}, {'label': 'Lip Smacking', 'value': 'lip smacking'}, {'label': 'Loose Associations', 'value': 'loose associations'}, {'label': 'Low Back Pain', 'value': 'low back pain'}, {'label': 'Lung Nodule', 'value': 'lung nodule'}, {'label': 'Macerated Skin', 'value': 'macerated skin'}, {'label': 'Macule', 'value': 'macule'}, {'label': 'Malaise', 'value': 'malaise'}, {'label': 'Mass In Breast', 'value': 'mass in breast'}, {'label': 'Mass Of Body Structure', 'value': 'mass of body structure'}, {'label': 'Mediastinal Shift', 'value': 'mediastinal shift'}, {'label': 'Mental Status Changes', 'value': 'mental status changes'}, {'label': 'Metastatic Lesion', 'value': 'metastatic lesion'}, {'label': 'Milky', 'value': 'milky'}, {'label': 'Moan', 'value': 'moan'}, {'label': 'Monoclonal', 'value': 'monoclonal'}, {'label': 'Monocytosis', 'value': 'monocytosis'}, {'label': 'Mood Depressed', 'value': 'mood depressed'}, {'label': 'Moody', 'value': 'moody'}, {'label': 'Motor Retardation', 'value': 'motor retardation'}, {'label': 'Muscle Hypotonia', 'value': 'muscle hypotonia'}, {'label': 'Muscle Twitch', 'value': 'muscle twitch'}, {'label': 'Myalgia', 'value': 'myalgia'}, {'label': 'Mydriasis', 'value': 'mydriasis'}, {'label': 'Myoclonus', 'value': 'myoclonus'}, {'label': 'Nasal Discharge Present', 'value': 'nasal discharge present'}, {'label': 'Nasal Flaring', 'value': 'nasal flaring'}, {'label': 'Nausea', 'value': 'nausea'}, {'label': 'Nausea And Vomiting', 'value': 'nausea and vomiting'}, {'label': 'Neck Stiffness', 'value': 'neck stiffness'}, {'label': 'Neologism', 'value': 'neologism'}, {'label': 'Nervousness', 'value': 'nervousness'}, {'label': 'Night Sweat', 'value': 'night sweat'}, {'label': 'Nightmare', 'value': 'nightmare'}, {'label': 'No Known Drug Allergies', 'value': 'no known drug allergies'}, {'label': 'No Status Change', 'value': 'no status change'}, {'label': 'Noisy Respiration', 'value': 'noisy respiration'}, {'label': 'Non-Productive Cough', 'value': 'non-productive cough'}, {'label': 'Nonsmoker', 'value': 'nonsmoker'}, {'label': 'Numbness', 'value': 'numbness'}, {'label': 'Numbness Of Hand', 'value': 'numbness of hand'}, {'label': 'Oliguria', 'value': 'oliguria'}, {'label': 'Orthopnea', 'value': 'orthopnea'}, {'label': 'Orthostasis', 'value': 'orthostasis'}, {'label': 'Out Of Breath', 'value': 'out of breath'}, {'label': 'Overweight', 'value': 'overweight'}, {'label': 'Pain', 'value': 'pain'}, {'label': 'Pain Abdominal', 'value': 'pain abdominal'}, {'label': 'Pain Back', 'value': 'pain back'}, {'label': 'Pain Chest', 'value': 'pain chest'}, {'label': 'Pain Foot', 'value': 'pain foot'}, {'label': 'Pain In Lower Limb', 'value': 'pain in lower limb'}, {'label': 'Pain Neck', 'value': 'pain neck'}, {'label': 'Painful Swallowing', 'value': 'painful swallowing'}, {'label': 'Pallor', 'value': 'pallor'}, {'label': 'Palpitation', 'value': 'palpitation'}, {'label': 'Panic', 'value': 'panic'}, {'label': 'Pansystolic Murmur', 'value': 'pansystolic murmur'}, {'label': 'Para 1', 'value': 'para 1'}, {'label': 'Para 2', 'value': 'para 2'}, {'label': 'Paralyse', 'value': 'paralyse'}, {'label': 'Paraparesis', 'value': 'paraparesis'}, {'label': 'Paresis', 'value': 'paresis'}, {'label': 'Paresthesia', 'value': 'paresthesia'}, {'label': 'Passed Stones', 'value': 'passed stones'}, {'label': 'Patient Non Compliance', 'value': 'patient non compliance'}, {'label': 'Pericardial Friction Rub', 'value': 'pericardial friction rub'}, {'label': 'Phonophobia', 'value': 'phonophobia'}, {'label': 'Photophobia', 'value': 'photophobia'}, {'label': 'Photopsia', 'value': 'photopsia'}, {'label': 'Pin-Point Pupils', 'value': 'pin-point pupils'}, {'label': 'Pleuritic Pain', 'value': 'pleuritic pain'}, {'label': 'Pneumatouria', 'value': 'pneumatouria'}, {'label': 'Polydypsia', 'value': 'polydypsia'}, {'label': 'Polymyalgia', 'value': 'polymyalgia'}, {'label': 'Polyuria', 'value': 'polyuria'}, {'label': 'Poor Dentition', 'value': 'poor dentition'}, {'label': 'Poor Feeding', 'value': 'poor feeding'}, {'label': 'Posteriorãƒ?Ã‚Â\xa0Rhinorrhea', 'value': 'posteriorÃƒ?Ã‚Â\xa0rhinorrhea'}, {'label': 'Posturing', 'value': 'posturing'}, {'label': 'Presence Of Q Wave', 'value': 'presence of q wave'}, {'label': 'Pressure Chest', 'value': 'pressure chest'}, {'label': 'Previous Pregnancies 2', 'value': 'previous pregnancies 2'}, {'label': 'Primigravida', 'value': 'primigravida'}, {'label': 'Prodrome', 'value': 'prodrome'}, {'label': 'Productive Cough', 'value': 'productive cough'}, {'label': 'Projectile Vomiting', 'value': 'projectile vomiting'}, {'label': 'Prostate Tender', 'value': 'prostate tender'}, {'label': 'Prostatism', 'value': 'prostatism'}, {'label': 'Proteinemia', 'value': 'proteinemia'}, {'label': 'Pruritus', 'value': 'pruritus'}, {'label': 'Pulse Absent', 'value': 'pulse absent'}, {'label': 'Pulsusãƒ?Ã‚Â\xa0Paradoxus', 'value': 'pulsusÃƒ?Ã‚Â\xa0paradoxus'}, {'label': 'Pustule', 'value': 'pustule'}, {'label': 'Qt Interval Prolonged', 'value': 'qt interval prolonged'}, {'label': 'R Wave Feature', 'value': 'r wave feature'}, {'label': 'Rale', 'value': 'rale'}, {'label': 'Rambling Speech', 'value': 'rambling speech'}, {'label': 'Rapid Shallow Breathing', 'value': 'rapid shallow breathing'}, {'label': 'Red Blotches', 'value': 'red blotches'}, {'label': 'Redness', 'value': 'redness'}, {'label': 'Regurgitates After Swallowing', 'value': 'regurgitates after swallowing'}, {'label': 'Renal Angle Tenderness', 'value': 'renal angle tenderness'}, {'label': 'Rest Pain', 'value': 'rest pain'}, {'label': 'Retch', 'value': 'retch'}, {'label': 'Retropulsion', 'value': 'retropulsion'}, {'label': 'Rhd Positive', 'value': 'rhd positive'}, {'label': 'Rhonchus', 'value': 'rhonchus'}, {'label': 'Rigor - Temperature-Associated Observation', 'value': 'rigor - temperature-associated observation'}, {'label': 'Rolling Of Eyes', 'value': 'rolling of eyes'}, {'label': 'Room Spinning', 'value': 'room spinning'}, {'label': 'Satiety Early', 'value': 'satiety early'}, {'label': 'Scar Tissue', 'value': 'scar tissue'}, {'label': 'Sciatica', 'value': 'sciatica'}, {'label': 'Scleralãƒ?Ã‚Â\xa0Icterus', 'value': 'scleralÃƒ?Ã‚Â\xa0icterus'}, {'label': 'Scratch Marks', 'value': 'scratch marks'}, {'label': 'Sedentary', 'value': 'sedentary'}, {'label': 'Seizure', 'value': 'seizure'}, {'label': 'Sensory Discomfort', 'value': 'sensory discomfort'}, {'label': 'Shooting Pain', 'value': 'shooting pain'}, {'label': 'Shortness Of Breath', 'value': 'shortness of breath'}, {'label': 'Side Pain', 'value': 'side pain'}, {'label': 'Sinus Rhythm', 'value': 'sinus rhythm'}, {'label': 'Sleeplessness', 'value': 'sleeplessness'}, {'label': 'Sleepy', 'value': 'sleepy'}, {'label': 'Slowing Of Urinary Stream', 'value': 'slowing of urinary stream'}, {'label': 'Sneeze', 'value': 'sneeze'}, {'label': 'Sniffle', 'value': 'sniffle'}, {'label': 'Snore', 'value': 'snore'}, {'label': 'Snuffle', 'value': 'snuffle'}, {'label': 'Soft Tissue Swelling', 'value': 'soft tissue swelling'}, {'label': 'Sore To Touch', 'value': 'sore to touch'}, {'label': 'Spasm', 'value': 'spasm'}, {'label': 'Speech Slurred', 'value': 'speech slurred'}, {'label': 'Splenomegaly', 'value': 'splenomegaly'}, {'label': 'Spontaneous Rupture Of Membranes', 'value': 'spontaneous rupture of membranes'}, {'label': 'Sputum Purulent', 'value': 'sputum purulent'}, {'label': 'St Segment Depression', 'value': 'st segment depression'}, {'label': 'St Segment Elevation', 'value': 'st segment elevation'}, {'label': 'Stiffness', 'value': 'stiffness'}, {'label': 'Stinging Sensation', 'value': 'stinging sensation'}, {'label': 'Stool Color Yellow', 'value': 'stool color yellow'}, {'label': 'Stridor', 'value': 'stridor'}, {'label': 'Stuffy Nose', 'value': 'stuffy nose'}, {'label': 'Stupor', 'value': 'stupor'}, {'label': 'Suicidal', 'value': 'suicidal'}, {'label': 'Superimposition', 'value': 'superimposition'}, {'label': 'Sweat', 'value': 'sweat'}, {'label': 'Sweating Increased', 'value': 'sweating increased'}, {'label': 'Swelling', 'value': 'swelling'}, {'label': 'Symptom Aggravating Factors', 'value': 'symptom aggravating factors'}, {'label': 'Syncope', 'value': 'syncope'}, {'label': 'Systolic Ejection Murmur', 'value': 'systolic ejection murmur'}, {'label': 'Systolic Murmur', 'value': 'systolic murmur'}, {'label': 'T Wave Inverted', 'value': 't wave inverted'}, {'label': 'Tachypnea', 'value': 'tachypnea'}, {'label': 'Tenesmus', 'value': 'tenesmus'}, {'label': 'Terrify', 'value': 'terrify'}, {'label': 'Thicken', 'value': 'thicken'}, {'label': 'Throat Sore', 'value': 'throat sore'}, {'label': 'Throbbing Sensation Quality', 'value': 'throbbing sensation quality'}, {'label': 'Tinnitus', 'value': 'tinnitus'}, {'label': 'Tired', 'value': 'tired'}, {'label': 'Titubation', 'value': 'titubation'}, {'label': 'Todd Paralysis', 'value': 'todd paralysis'}, {'label': 'Tonic Seizures', 'value': 'tonic seizures'}, {'label': 'Transaminitis', 'value': 'transaminitis'}, {'label': 'Transsexual', 'value': 'transsexual'}, {'label': 'Tremor', 'value': 'tremor'}, {'label': 'Tremor Resting', 'value': 'tremor resting'}, {'label': 'Tumor Cell Invasion', 'value': 'tumor cell invasion'}, {'label': 'Unable To Concentrate', 'value': 'unable to concentrate'}, {'label': 'Unconscious State', 'value': 'unconscious state'}, {'label': 'Uncoordination', 'value': 'uncoordination'}, {'label': 'Underweight', 'value': 'underweight'}, {'label': 'Unhappy', 'value': 'unhappy'}, {'label': 'Unresponsiveness', 'value': 'unresponsiveness'}, {'label': 'Unsteady Gait', 'value': 'unsteady gait'}, {'label': 'Unwell', 'value': 'unwell'}, {'label': 'Urge Incontinence', 'value': 'urge incontinence'}, {'label': 'Urgency Ofãƒ?Ã‚Â\xa0Micturition', 'value': 'urgency ofÃƒ?Ã‚Â\xa0micturition'}, {'label': 'Urinary Hesitation', 'value': 'urinary hesitation'}, {'label': 'Urinoma', 'value': 'urinoma'}, {'label': 'Verbal Auditory Hallucinations', 'value': 'verbal auditory hallucinations'}, {'label': 'Verbally Abusive Behavior', 'value': 'verbally abusive behavior'}, {'label': 'Vertigo', 'value': 'vertigo'}, {'label': 'Vision Blurred', 'value': 'vision blurred'}, {'label': 'Vomiting', 'value': 'vomiting'}, {'label': 'Weepiness', 'value': 'weepiness'}, {'label': 'Weight Gain', 'value': 'weight gain'}, {'label': 'Welt', 'value': 'welt'}, {'label': 'Wheelchair Bound', 'value': 'wheelchair bound'}, {'label': 'Wheezing', 'value': 'wheezing'}, {'label': 'Withdraw', 'value': 'withdraw'}, {'label': 'Worry', 'value': 'worry'}, {'label': 'Yellow Sputum', 'value': 'yellow sputum'}, {'label': 'Itching', 'value': 'itching'}, {'label': 'Skin Rash', 'value': 'skin_rash'}, {'label': 'Nodal Skin Eruptions', 'value': 'nodal_skin_eruptions'}, {'label': 'Continuous Sneezing', 'value': 'continuous_sneezing'}, {'label': 'Shivering', 'value': 'shivering'}, {'label': 'Chills', 'value': 'chills'}, {'label': 'Joint Pain', 'value': 'joint_pain'}, {'label': 'Stomach Pain', 'value': 'stomach_pain'}, {'label': 'Acidity', 'value': 'acidity'}, {'label': 'Ulcers On Tongue', 'value': 'ulcers_on_tongue'}, {'label': 'Muscle Wasting', 'value': 'muscle_wasting'}, {'label': 'Burning Micturition', 'value': 'burning_micturition'}, {'label': 'Spotting  Urination', 'value': 'spotting_ urination'}, {'label': 'Weight Gain', 'value': 'weight_gain'}, {'label': 'Anxiety', 'value': 'anxiety'}, {'label': 'Cold Hands And Feets', 'value': 'cold_hands_and_feets'}, {'label': 'Mood Swings', 'value': 'mood_swings'}, {'label': 'Weight Loss', 'value': 'weight_loss'}, {'label': 'Restlessness', 'value': 'restlessness'}, {'label': 'Patches In Throat', 'value': 'patches_in_throat'}, {'label': 'Irregular Sugar Level', 'value': 'irregular_sugar_level'}, {'label': 'High Fever', 'value': 'high_fever'}, {'label': 'Sunken Eyes', 'value': 'sunken_eyes'}, {'label': 'Breathlessness', 'value': 'breathlessness'}, {'label': 'Sweating', 'value': 'sweating'}, {'label': 'Dehydration', 'value': 'dehydration'}, {'label': 'Indigestion', 'value': 'indigestion'}, {'label': 'Yellowish Skin', 'value': 'yellowish_skin'}, {'label': 'Dark Urine', 'value': 'dark_urine'}, {'label': 'Loss Of Appetite', 'value': 'loss_of_appetite'}, {'label': 'Pain Behind The Eyes', 'value': 'pain_behind_the_eyes'}, {'label': 'Back Pain', 'value': 'back_pain'}, {'label': 'Abdominal Pain', 'value': 'abdominal_pain'}, {'label': 'Diarrhoea', 'value': 'diarrhoea'}, {'label': 'Mild Fever', 'value': 'mild_fever'}, {'label': 'Yellow Urine', 'value': 'yellow_urine'}, {'label': 'Yellowing Of Eyes', 'value': 'yellowing_of_eyes'}, {'label': 'Acute Liver Failure', 'value': 'acute_liver_failure'}, {'label': 'Fluid Overload', 'value': 'fluid_overload'}, {'label': 'Swelling Of Stomach', 'value': 'swelling_of_stomach'}, {'label': 'Swelled Lymph Nodes', 'value': 'swelled_lymph_nodes'}, {'label': 'Blurred And Distorted Vision', 'value': 'blurred_and_distorted_vision'}, {'label': 'Phlegm', 'value': 'phlegm'}, {'label': 'Throat Irritation', 'value': 'throat_irritation'}, {'label': 'Redness Of Eyes', 'value': 'redness_of_eyes'}, {'label': 'Sinus Pressure', 'value': 'sinus_pressure'}, {'label': 'Runny Nose', 'value': 'runny_nose'}, {'label': 'Congestion', 'value': 'congestion'}, {'label': 'Chest Pain', 'value': 'chest_pain'}, {'label': 'Weakness In Limbs', 'value': 'weakness_in_limbs'}, {'label': 'Fast Heart Rate', 'value': 'fast_heart_rate'}, {'label': 'Pain During Bowel Movements', 'value': 'pain_during_bowel_movements'}, {'label': 'Pain In Anal Region', 'value': 'pain_in_anal_region'}, {'label': 'Bloody Stool', 'value': 'bloody_stool'}, {'label': 'Irritation In Anus', 'value': 'irritation_in_anus'}, {'label': 'Neck Pain', 'value': 'neck_pain'}, {'label': 'Cramps', 'value': 'cramps'}, {'label': 'Bruising', 'value': 'bruising'}, {'label': 'Obesity', 'value': 'obesity'}, {'label': 'Swollen Legs', 'value': 'swollen_legs'}, {'label': 'Swollen Blood Vessels', 'value': 'swollen_blood_vessels'}, {'label': 'Puffy Face And Eyes', 'value': 'puffy_face_and_eyes'}, {'label': 'Enlarged Thyroid', 'value': 'enlarged_thyroid'}, {'label': 'Brittle Nails', 'value': 'brittle_nails'}, {'label': 'Swollen Extremeties', 'value': 'swollen_extremeties'}, {'label': 'Excessive Hunger', 'value': 'excessive_hunger'}, {'label': 'Extra Marital Contacts', 'value': 'extra_marital_contacts'}, {'label': 'Drying And Tingling Lips', 'value': 'drying_and_tingling_lips'}, {'label': 'Slurred Speech', 'value': 'slurred_speech'}, {'label': 'Knee Pain', 'value': 'knee_pain'}, {'label': 'Hip Joint Pain', 'value': 'hip_joint_pain'}, {'label': 'Muscle Weakness', 'value': 'muscle_weakness'}, {'label': 'Stiff Neck', 'value': 'stiff_neck'}, {'label': 'Swelling Joints', 'value': 'swelling_joints'}, {'label': 'Movement Stiffness', 'value': 'movement_stiffness'}, {'label': 'Spinning Movements', 'value': 'spinning_movements'}, {'label': 'Loss Of Balance', 'value': 'loss_of_balance'}, {'label': 'Unsteadiness', 'value': 'unsteadiness'}, {'label': 'Weakness Of One Body Side', 'value': 'weakness_of_one_body_side'}, {'label': 'Loss Of Smell', 'value': 'loss_of_smell'}, {'label': 'Bladder Discomfort', 'value': 'bladder_discomfort'}, {'label': 'Foul Smell Of Urine', 'value': 'foul_smell_of urine'}, {'label': 'Continuous Feel Of Urine', 'value': 'continuous_feel_of_urine'}, {'label': 'Passage Of Gases', 'value': 'passage_of_gases'}, {'label': 'Internal Itching', 'value': 'internal_itching'}, {'label': 'Toxic Look (Typhos)', 'value': 'toxic_look_(typhos)'}, {'label': 'Depression', 'value': 'depression'}, {'label': 'Irritability', 'value': 'irritability'}, {'label': 'Muscle Pain', 'value': 'muscle_pain'}, {'label': 'Altered Sensorium', 'value': 'altered_sensorium'}, {'label': 'Red Spots Over Body', 'value': 'red_spots_over_body'}, {'label': 'Belly Pain', 'value': 'belly_pain'}, {'label': 'Abnormal Menstruation', 'value': 'abnormal_menstruation'}, {'label': 'Dischromic  Patches', 'value': 'dischromic _patches'}, {'label': 'Watering From Eyes', 'value': 'watering_from_eyes'}, {'label': 'Increased Appetite', 'value': 'increased_appetite'}, {'label': 'Family History', 'value': 'family_history'}, {'label': 'Mucoid Sputum', 'value': 'mucoid_sputum'}, {'label': 'Rusty Sputum', 'value': 'rusty_sputum'}, {'label': 'Lack Of Concentration', 'value': 'lack_of_concentration'}, {'label': 'Visual Disturbances', 'value': 'visual_disturbances'}, {'label': 'Receiving Blood Transfusion', 'value': 'receiving_blood_transfusion'}, {'label': 'Receiving Unsterile Injections', 'value': 'receiving_unsterile_injections'}, {'label': 'Coma', 'value': 'coma'}, {'label': 'Stomach Bleeding', 'value': 'stomach_bleeding'}, {'label': 'Distention Of Abdomen', 'value': 'distention_of_abdomen'}, {'label': 'History Of Alcohol Consumption', 'value': 'history_of_alcohol_consumption'}, {'label': 'Blood In Sputum', 'value': 'blood_in_sputum'}, {'label': 'Prominent Veins On Calf', 'value': 'prominent_veins_on_calf'}, {'label': 'Palpitations', 'value': 'palpitations'}, {'label': 'Painful Walking', 'value': 'painful_walking'}, {'label': 'Pus Filled Pimples', 'value': 'pus_filled_pimples'}, {'label': 'Blackheads', 'value': 'blackheads'}, {'label': 'Scurring', 'value': 'scurring'}, {'label': 'Skin Peeling', 'value': 'skin_peeling'}, {'label': 'Silver Like Dusting', 'value': 'silver_like_dusting'}, {'label': 'Small Dents In Nails', 'value': 'small_dents_in_nails'}, {'label': 'Inflammatory Nails', 'value': 'inflammatory_nails'}, {'label': 'Blister', 'value': 'blister'}, {'label': 'Red Sore Around Nose', 'value': 'red_sore_around_nose'}, {'label': 'Yellow Crust Ooze', 'value': 'yellow_crust_ooze'}];
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [option, setOptions] = React.useState([]);
  const [link, setMyLink] = React.useState([]);
  const [diseaseName, setDiseaseName] = useState("");
  const [ayurveda, setAyurveda] = useState([]);
  const [general, setGeneral] = useState([]);
  const [homeopathy, setHomeopathy] = useState([]);
  const [loading, setLoading] = useState(false);
  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  const prediction1  = () => {
    prediction();
    setLoading(true);
  }
  const prediction = () => {
    fetch(`http://127.0.0.1:5000/symptoms`,{
            'method':'POST',
            'headers' : {
            'content-type':'application/json'
      },
      body:JSON.stringify(option)
    })
    .then(response => response.json())
    .catch(error => console.log(error))

    getInfo();
    getLinks();
  }
  const getLinks = () => {
    fetch(`http://127.0.0.1:5000/links`,{
            'method':'GET',
            'headers' : {
            'content-type':'application/json',
            'accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(link => (setMyLink(link)))
    .catch(error => console.log(error))
    console.log(link)
    setAyurveda(link.ayurvedic)
    console.log(link.ayurvedic)
    setGeneral(link.general);
    setHomeopathy(link.homeopathy);
    if(!(link.ayurvedic === undefined)){
       setLoading(true);
    }
   
    
  }

  const arrayMaker = (options) => {
    var arr = [];
    for(let i = 0 ; i < options.length ; i++)
    {
      arr.push(options[i]['value']);
    }
    setOptions(arr);
    console.log(JSON.stringify(arr));
  }
  const [myData, setMyData] = React.useState([]);
  const getInfo = () => {
    console.log("auysgdysabsdnbfvha nhgsjkf ");
    fetch('http://127.0.0.1:5000/prediction', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    }).then(
      response => response.text()
    ).then(data => setMyData(data))
    
    if(myData === "" || myData == null || myData === undefined)
    {
      console.log('No Disease');
    }
    setDiseaseName(myData);
    
    console.log(myData)
  }

  const [one,setOne] = useState(true);
  const [two,setTwo] = useState(false);
  const [three,setThree] = useState(false);
  const [check1,setCheck1] = useState(false);
  const [check2,setCheck2] = useState(false);
  const [check3,setCheck3] = useState(false);
  const [show,setShow] = useState(false);
  const [predict,setPredict] = useState(false);

  const t1 = () => {
    setOne(true);
    setTwo(false);
    setThree(false);
    setCheck1(true);
  }
  const t2 = () => {
    setOne(false);
    setTwo(true);
    setThree(false);
    setCheck2(true);
  }
  const t3 = () => {
    setOne(false);
    setTwo(false);
    setThree(true);
    setCheck3(true);
  }
  const setShw = () => {
    setPredict(false);
    setShow(true);
  }
  const setPre = () => {
    setPredict(true);
    setShow(false);
  }
  
  return (
    <>
      <div className='select-search'>
        <p> Select symptoms here </p>
        <div className='search'>
          <Select
            value={selectedOptions}
            onChange={(o) => {
              setSelectedOptions(o)
              arrayMaker(o)
           
            }}
            options={aquaticCreatures}
            isMulti
            isOptionDisabled={() => selectedOptions.length >= 8}
            className="search-bar"
          />
          <button className='click' onClick={() => {prediction(); setShw()}}> Predict </button>
          
        </div>
      </div>

      <div className={show ? 'show-results dis':'show-results'}>
        <div className='show-res'>
          <button className='clicks' onClick={() => {prediction1(); setPre()}}> Show Results </button>
        </div>

      </div>
      
      <div className={predict ? 'predict dis':'predict'}>
        <div className='disease'>
          <p>Predicted disease</p>
          <div className='disease-title'> {diseaseName} </div>
        </div>
        <div>
          
        </div>
        <div className='tabs'>
          <div id='general' className={one ? "active" : ""} onClick={t1}><a href="#">General</a></div>
          <div id='ayurveda'className={two ? "active" : ""} onClick={t2}><a href="#">Ayurveda</a></div>
          <div id='homeopathy'className={three ? "active" : ""} onClick={t3}><a href="#">Homeopathy</a></div>
        </div>
        <div id='box'>
          <div id="g" className={one ? "tabone act" : "tabone"}>
            
          {check1 && (Object.values(general).map(descs => (
              Object.values(descs).map(desc => (
                <ReactTinyLink
                  cardSize="large"
                  showGraphic={false}
                  maxLine={1}
                  minLine={1}
                  description={desc.description}
                  header={desc.title}
                  url={Object.keys(descs)[0]}
                  className="card-andi"
                  width="100%"
                />
              ))
            )))

            }
            
          </div>
          <div id="a" className={two ? "tabtwo act" : "tabtwo"}>
            {check2 && (Object.values(ayurveda).map(descs => (
              Object.values(descs).map(desc => (
                <ReactTinyLink
                  cardSize="large"
                  showGraphic={false}
                  maxLine={1}
                  minLine={1}
                  description={desc.description}
                  header={desc.title}
                  url={Object.keys(descs)[0]}
                  className="card-andi"
                  width="100%"
                />
              ))
            )))

            }
          </div>
          <div id="h" className={three ? "tabthree act" : "tabthree"}>
            {check3 && (Object.values(homeopathy).map(descs => (
              Object.values(descs).map(desc => (
                <ReactTinyLink
                  cardSize="large"
                  showGraphic={false}
                  maxLine={1}
                  minLine={1}
                  description={desc.description}
                  header={desc.title}
                  url={Object.keys(descs)[0]}
                  className="card-andi"
                  width="100%"
                />
              ))
            )))

            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Diseaseprediction