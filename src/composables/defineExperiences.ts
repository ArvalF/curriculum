export function useDefineExperiences() {
  const experiences: Array<Experience> = [
    {
      // IGN
      title: "Concepteur Développeur",
      place: "Institut Géographique National",
      date: "2022 - en cours",
      projectSets: [
        {
          title: "Développeur Web",
          projects:
            [
              {
                title: "Interface cartographique cartes.gouv",
                description: "Développement en VueJS de la nouvelle version du portail cartographique. ",
                exemples: [{ link: "https://cartes.gouv.fr/cartes/", label: "Cartes.gouv/cartes" }],
                competences: ["Javascript", "Vue 3", "Design System de l'état DSFR", "VueDSFR", "HTML/CSS", "Figma"]
              },
              {
                title: "Librairie d'extension OpenLayers",
                description: "Participation au développement de la librairie d'extension openlayers permettant l'intégration de fonctionnalités cartographiques étendues et l'accès aux services web de l'IGN",
                exemples: [
                  { link: "https://github.com/IGNF/geopf-extensions-openlayers", label: "Dépôt Extensions Open Layers" },
                ],
                competences: ["Javascript", "CSS"]

              },
              {
                title: "Développement d'application Web",
                description: "Participation au développement de l'application Cartes IGN. ",
                exemples: [
                  { link: "https://play.google.com/store/apps/details?id=fr.ign.geoportail&hl=fr&pli=1", label: "Store Appli Cartes IGN" },
                  { link: "https://github.com/IGNF/cartes-ign-app", label: "Dépôt Cartes IGN" }
                ],
                competences: ["Application Mobile", "Javascript", "HTML/CSS", "MapLibre GL JS", "Figma"]
              },
              {
                title: "Script de génération de configurations statiques",
                description: "CronJob produisant des fichiers de configuration compilant des données issues de différents services",
                competences: ["Python", "Node script"],
                exemples: [
                  { link: "https://github.com/IGNF/geoportal-configuration", label: "Configuration d'interface" }
                ],
              }
            ]
        },
        {
          title: "Suivi de développement Géoplateforme",
          projects:
            [
              {
                title: "Suivi des développements d'un prestataire",
                description: "Dans le cadre de la création de la géoplateforme, suivi techniques des implémentations, recettes des services",
                competences: ["JIRA", "Recettes fonctionnelles et techniques"],
                exemples: [
                  { link: "https://geoservices.ign.fr/services-geoplateforme", label: "La géoplateforme" },
                  { link: "https://cartes.gouv.fr/catalogue/search", label: "Catalogue des données et services" },
                ],
              },
              {
                title: "Étude sur la généralisation en cartographie",
                description: "Étude de la généralisation automatique des données volumineuses France entière dans le cadre de la génération de flux TMS. Recherche d'un paramétrage automatique pour les clients de la géoplateforme.",
                exemples: [
                  { link: "https://github.com/felt/tippecanoe", label: "Dépôt Tippecanoe" },
                ],
                competences: ["rok4", "tippecanoee"]
              },
              {
                title: "Suivi de la communauté OpenSource",
                description: "La géoplateforme se basant sur des solutions OpenSource, participation à différents évènements rassemblants les acteurs de la communauté. Par exemples les rencontres utilisateurs du Geonetwork",
                competences: ["Communauté OpenSource", "Gouvernance et financement", "Geonetwork", "Geoserver"]
              }]
        },
        {
          title: "Chargé d'exploitation",
          projects:
            [{
              title: "Mise en place d'une infrastructure de génération de flux TMS",
              description: "Déploiement d'une infrastructure de génération de pyramide TMS sur des machines dédiées. Mise à jour automatique.",
              exemples: [
                { link: "https://rok4.github.io/", label: "ROK4 : suite de génération de flux géographique" },
              ],
              competences: ["TileMapService", "Jenkins", "rok4", "Ansible", "CronJob"]
            },
            {
              title: "Paramètrage des flux TMS",
              description: "Mise en place des chaînes de production des flux TileMapService.",
              exemples: [
                { link: "https://geoservices.ign.fr/documentation/services/api-et-services-ogc/tuiles-vectorielles-tmswmts/connexion", label: "Flux TMS de l'IGN" },
                { link: "https://rok4.github.io/", label: "ROK4 : suite de génération de flux géographique" },
              ],
              competences: ["TileMapService", "POSTGRES/SQL", "POSTGIS", "bash", "rok4", "tippecanoe", "bash", "rok4", "tippecanoe"]
            },
            {
              title: "Expertise styles TMS",
              description: "Paramétrage de tous les styles pour les nouveaux flux TMS. Création de nouveau styles au format MapBox et conversion depuis format SLD du Geoserver. Formation des agents amenés à utiliser ce nouveaux format",
              exemples: [
                { link: "https://geoservices.ign.fr/documentation/services/api-et-services-ogc/tuiles-vectorielles-tmswmts/styles", label: "Listes des styles Mapbox générés" },
              ],
              competences: ["TileMapService", "Mapbox Style", "Geoserver", "SLD",]

            },
            {
              title: "Recettes et Tests Géoservices",
              description: "Mise en place de tests automatiques et sondes de supervision sur les Géoservices de l'IGN",
              competences: ["Connaissances générales sur les Géoservices", "Ticketing", "Supervision", "Tests automatisés", "Jenkins"]
            },
            {
              title: "Expertise technique",
              description: "Réponse au SAV technique grâce à l'expertise sur les services",
              competences: ["Standards OGC", "Redmine outil de ticketing"]
            }]
        }
      ]
    },
    {
      title: "Chargé de TD",
      place: "Université Paris 1 Panthéon-Sorbonne",
      date: "2020 - en cours",
      projects:
        [{
          title: "Système d'information Géographique (SIG)",
          description: "Travaux Dirigés pour L1 à M2. J'ai assuré 44h de TD chaque semestre depuis 2020. Les cours portent sur les fondamentaux des SIG, la manipulation de données géographiques, la création de cartes thématiques et l'utilisation de logiciels SIG tels que QGIS.",
          competences: ["Enseignement supérieur", "Préparation de cours", "Système d'informations géographiques (SIG)", "QGIS", "Standards OGC"]
        }]
    },
    {
      title: "Développeur Web fullstack",
      place: "Sculpteo",
      date: "2018 - 2019",
      projects:
        [{
          title: "Développement d'applications",
          description: "Dans un contexte d'usine et de production en continu, développement d'applications pour assister les opérateurs",
          competences: ["Javascript", "HTML/CSS",]
        },
        {
          title: "Front-End Developpeur",
          description: "Évolution du site e-commerce, correction de bugs, optimisation des performances.",
          exemples: [
            { link: "https://www.sculpteo.com/fr/", label: "Site commerciale Scultpeo" },
          ],
          competences: ["Javascript", "HTML/CSS"]
        },
        {
          title: "Back-End Developpeur",
          description: "Évolution du back-office de gestion des commandes et des impressions 3D. Migration de données et enjeu de ",
          exemples: [
            { link: "https://www.sculpteo.com/fr/", label: "Site commerciale Scultpeo" },
          ],
          competences: ["Python/Django", "HTML/CSS"]
        },
        {
          title: "Marketing digital",
          description: `Mise en place de campagnes d'A/B testing sur le site e-commerce afin d'optimiser le taux de conversion. Suivi des actions utlisateurs (clics, heatmaps) et analyse des résultats.`,
          exemples: [
            { link: "https://www.sculpteo.com/fr/", label: "Site commerciale Scultpeo" },
          ],
          competences: ["Javascript", "Marketing", "A/B Testing"]
        }]
    }
  ]
  return experiences
}

export function useDefineFormations() {
  const formations: Array<Experience> = [
    {
      title: "Formation en informatique",
      place: "École 42",
      date: "2017 - 2019",
      projects:
        [
          {
            title: "Expérience entreprenariale",
            description: "Proposition d'une solution innovante de valorisation de l'abbaye de Cluny via une application mobile de visite guidée au son spatialisé",
            exemples: [{ link: "https://www.matrice.io/", label: "Parcours Matrice" }],
            competences: ["Étude de marché", "Business Model", "Pitch", "Lean Startup"]
          },
          {
            title: "cole 42",
            description: "Formation intensive en développement informatique axée sur la pratique et la résolution de projets concrets en autonomie ou en équipe.",
            exemples: [{ link: "https://42.fr/42-cest-quoi/la-methode-42/", label: "École 42" }],
            competences: ["C", "Shell", "Algorithmique", "Architecture logicielle", "Computer Graphics", "Pair-programming", "PHP", "Développement web"]
          }
        ]
    },
    {
      title: "Parcours universitaire en Géographie",
      place: "Université Paris 1 Panthéon-Sorbonne",
      date: "2014 - 2016",
      projects:
        [
          {
            title: "Publication d'un livret pédagogique sur les grottes d'Isturitz et d'Oxocelhaya",
            description: "Livret de vulgarisation scientifique vendu dans le cadre de la visite des grottes d'Isturitz et d'Oxocelhaya (Pyrénées-Atlantiques).",
            exemples: [{ link: "https://hal.science/hal-04911712v1", label: "Publication" }],
            competences: ["inDesing", "Illustrator", "Vulgarisation scientifique", "Rédaction", "Cartographie"]
          },
          {
            title: "Mémoire de recherche : Spéléogenèse et zookarstologie",
            description: "Étude de la spéléogenèse dans les grottes d'Isturitz et Oxcocelhaya (Pyrénées-Atlantiques).",
            exemples: [{ link: "https://www.researchgate.net/profile/Hector-Caillaud", label: "Publications" }],
            competences: ["Géomorphologie", "Paléoclimatologie", "Environnements Karstiques", "photogrammétrie", "Rédaction scientifique"]
          },
          {
            title: "Master Dynamiques des milieux et risques",
            description: "Formation spécialisée en géographie physique axée sur les dynamiques environnementales (changements climatiques), les risques naturels et les paléoclimats",
            exemples: [{ link: "https://formations.pantheonsorbonne.fr/fr/catalogue-des-formations/master-M/master-geographie-KBUW66GE/master-parcours-dynamiques-des-milieux-et-risques-dynarisk-KBUW7UTJ.html", label: "Master Dynarisk" }],
            competences: ["Changements Environnementaux", "Risque Naturel", "Géomorphologie", "Paléoclimatologie", "Statistiques", "SIG", "Analyses spatiales", "Environnements Karstiques"]
          },
          {
            title: "Licence de Géographie",
            description: "Formation généraliste en géographie physique et humaine.",
            exemples: [{ link: "https://formations.pantheonsorbonne.fr/fr/catalogue-des-formations/licence-L/licence-geographie-et-amenagement-KBTFYMBI/licence-geographie-et-amenagement-parcours-espaces-territoires-societes-KBTG6ZIW.html", label: "Licence Géographie" }],
            competences: ["Hydrosystème", "Changements Environnementaux", "SIG", "Analyses spatiales", "Géographie humaine", "Sciences Sociales", "Cartographie"]
          }
        ]
    },
    {
      title: "Prépa B/L",
      place: "Lycée Lakanal",
      date: "2012 - 2014",
      projects:
        [
          {
            title: "Prépa Littéraire B/L",
            description: "Formation généraliste littéraire et scientifique.",
            exemples: [{ link: "https://www.citescolairelakanal.fr/cpge/presentation", label: "Lycée Lakanal" }],
            competences: ["Géographie", "Histoire", "Philosophie", "Littérature", "Mathématiques", "Sciences Sociales"]
          }
        ]
    }
  ]
  return formations
}
export function useDefineCompetences() {
  const competences = {
    "Langages, frameworks, technologies": [
      "Javascript", "Vue 3", "HTML", "CSS", "Python", "Python/Django", "Docker", "Postgres", "Postgis", "bash", "Application Mobile"
    ],
    "Géomatique et Cartographie": [
      "Système d'informations géographiques (SIG)", "QGIS", "Standards OGC", "PostGIS", "tippecanoee", "rok4", "MapLibre GL JS", "Geonetwork", "Geoserver", "TileMapService", "Mapbox", "Openlayers", "leaflet", "inDesing", "Illustrator"
    ],
    "Méthode et contexte de travail": [
      "Agile", "JIRA", "FIGMA", "Pair-programming", "Recettes fonctionnelles et techniques", "Test unitaire", "Design System de l'état DSFR", "Jenkins", "Communauté OpenSource"
    ],
    "Académiques": [
      "Enseignement supérieur", "Vulgarisation scientifique", "Géomorphologie", "Paléoclimatologie", "Photogrammétrie", "Rédaction scientifique",
      "Changements Environnementaux", "Risques Naturels", "Géomorphologie", "Statistiques", "SIG", "Analyses spatiales", "Environnements Karstiques",
      "Hydrosystème", "Analyses spatiales", "Géographie humaine"
    ]
  }
  return competences
}

export function useDefineLinks() {
  const links = [
    ["https://cartes.gouv.fr/cartes/", "Interface Cartographique : Cartes.gouv"],
    ["https://play.google.com/store/apps/details?id=fr.ign.geoportail&hl=fr&pli=1", "Application Mobile : CartesIGN"],
    ["https://ignf.github.io/geopf-extensions-openlayers/", "Extension javascript de la librairie OpenLayers"],
    ["https://www.sculpteo.com/fr/", 'Interface commerciale : Scultpeo Impression 3D']
  ]
  return links
}