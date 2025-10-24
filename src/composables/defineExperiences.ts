export function useDefineExperiences() {
 const experiences: Array<Experience> = [
    {
      title: "Développeur Web",
      place:  "Institut Géographique National",
      date: "2022 - en cours",
      projects :
    [    
      {
            title: "Interface cartographique cartes.gouv",
            description : "Site institutionnel de l'IGN. L'interface permet de consulter le catalogue de produit cartographiques et d'accéder aux services de la géoplateforme.",
            exemples: [{ link: "https://cartes.gouv.fr/cartes/", label : "Cartes.gouv/cartes"}],
            competences : ["Javascript", "Vue 3", "Design System de l'état DSFR", "VueDSFR", "HTML/CSS", "Figma"]
        },
       {
            title: "Librairie d'extension OpenLayers",
            description : "Librairie d'extension de la librairie javascript openlayers permettant l'intégration de fonctionnalités cartographiques étendues et l'accès aux services de la géoplateforme",
            exemples: [
              { link: "https://github.com/IGNF/geopf-extensions-openlayers", label : "Dépôt Extensions Open Layers"},
            ],
            competences : ["Javascript", "CSS"]
  
        },
       {
            title: "Développement d'application Web",
            description : "Participation au développement de l'application Cartes IGN. ",
            exemples: [
              { link: "https://play.google.com/store/apps/details?id=fr.ign.geoportail&hl=fr&pli=1", label : "Store Appli Cartes IGN"},
              { link: "https://github.com/IGNF/cartes-ign-app", label : "Dépôt Cartes IGN"}
            ],
            competences : ["Application Mobile", "Javascript", "HTML/CSS", "MapLibre GL JS", "Figma"]
        }
      ]
    },
    {
      title: "Chargé de TD",
      place:  "Université Paris 1 Panthéon-Sorbonne",
      date: "2020 - en cours",
      projects :
[        {
            title: "Système d'information Géographique (SIG)",
            description : "Travaux Dirigés pour L1 à M2. J'ai assuré 44h de TD chaque semestre depuis 2020. Les cours portent sur les fondamentaux des SIG, la manipulation de données géographiques, la création de cartes thématiques et l'utilisation de logiciels SIG tels que QGIS.",
            competences : ["Enseignement supérieur", "Préparation de cours", "Système d'informations géographiques (SIG)", "QGIS", "Standards OGC"]
        }]
    },
    {
      title: "Suivi de développement Géoplateforme",
      place:  "Institut Géographique National",
      date: "2021 - 2023",
      projects :
         [{
              title: "Etude sur la généralisation",
              description : "Etude de la généralisation automatique des données volumineuses France entière dans le cadre de la génération de flux TMS. Paramétrage automatique pour les clients de la géoplateforme.",
              exemples: [
                { link: "https://github.com/felt/tippecanoe", label : "Dépôt Tippecanoe"},
              ],
              competences : ["rok4", "tippecanoee"]
          },
          {
              title: "Suivi de développement service Métadonnées",
              description : "Dans le cadre de la création de la géoplateforme, suivi techniques des implémentations, recettes du service de métadonnées",
              competences : ["JIRA", "tippecanoee"]
          },
          {
              title: "Suivi de la communauté OpenSource",
              description : "La géoplateforme se basant sur des solutions OpenSource, particpation à différents évènements rassemblants les acteurs de la communauté. Par exemples les rencontres utilisateurs du Geonetwork",
              competences : ["Communauté OpenSource", "Gouvernance et financement", "Geonetwork", "Geoserver"]
          }]
    },
    {
      title: "Chargé d'exploitation",
      place:  "Institut Géographique National",
      date: "2019 - 2021",
      projects :
          [{
            title: "Mise en place d'une infrastructure de génération de flux TMS",
            description : "Déploiement d'une infrastructure de génération de pyramide TMS sur des machines dédiées. Mise à jour automatique.",
            exemples : [
              { link: "https://rok4.github.io/", label : "ROK4 : suite de génération de flux géographique"},
            ],
            competences : ["TileMapService", "Jenkins", "rok4", "Ansible", "CronJob"]
          }, 
          {
              title: "Paramètrage des flux TMS",
              description : "Mise en place des chaînes de production des flux TileMapService.",
              exemples: [
                { link: "https://geoservices.ign.fr/documentation/services/api-et-services-ogc/tuiles-vectorielles-tmswmts/connexion", label : "Flux TMS de l'IGN"},
                { link: "https://rok4.github.io/", label : "ROK4 : suite de génération de flux géographique"},
              ],
              competences : ["TileMapService", "POSTGRES/SQL", "POSTGIS", "bash", "rok4", "tippecanoe",  "bash", "rok4", "tippecanoe"]
          },
          {
              title: "Expertise styles TMS",
              description : "Paramétrage de tous les styles pour les nouveaux flux TMS. Création de nouveau styles au format MapBox et conversion depuis format SLD du Geoserver. Formation des agents amenés à utiliser ce nouveaux format",
              exemples: [
                { link: "https://geoservices.ign.fr/documentation/services/api-et-services-ogc/tuiles-vectorielles-tmswmts/styles", label : "Listes des styles Mapbox générés"},
              ],
              competences : ["TileMapService", "Mapbox Style", "Geoserver", "SLD", ]
          
          },
          {
              title: "Recettes et Tests Géoservices",
              description : "Mise en place de tests automatiques et sondes de supervision sur les Géoservices de l'IGN",
              competences : ["Connaissances générales sur les Géoservices", "Ticketing", "Supervision", "Tests automatisés", "Jenkins"]
          },
          {
              title: "Expertise technique",
              description : "Réponse au SAV technique grâce à l'expertise sur les services",
              competences : ["Standards OGC", "Redmine outil de ticketing"]
          }]
    },
    {
      title: "Développeur Web fullstack",
      place:  "Sculpteo",
      date: "2018 - 2019",
      projects :
        [{
          title: "Développement d'applications",
          description : "Dans un contexte d'usine et de production en continu, développement d'applications pour assister les opérateurs",
          competences : ["Javascript", "HTML/CSS", ]
      },
        {
          title: "Front-End Developpeur",
          description : "Evolution du site e-commerce, correction de bugs, optimisation des performances.",
          exemples : [
              { link: "https://www.sculpteo.com/fr/", label : "Site commerciale Scultpeo"},
            ],
          competences : ["Javascript", "HTML/CSS"]
      },
      {
        title: "Back-End Developpeur",
        description : "Evolution du back-office de gestion des commandes et des impressions 3D. Migration de données et enjeu de ",
        exemples : [
            { link: "https://www.sculpteo.com/fr/", label : "Site commerciale Scultpeo"},
          ],
        competences : ["Python/Django", "HTML/CSS"]
      },
      {
        title: "Marketing digital",
        description : `Mise en place de campagnes d'A/B testing sur le site e-commerce afin d'optimiser le taux de conversion. Suivi des actions utlisateurs (clics, heatmaps) et analyse des résultats.`,
          exemples : [
              { link: "https://www.sculpteo.com/fr/", label : "Site commerciale Scultpeo"},
            ],
          competences : ["Javascript", "Marketing", "A/B Testing"]
      }]
    }
  ]
  return experiences
}