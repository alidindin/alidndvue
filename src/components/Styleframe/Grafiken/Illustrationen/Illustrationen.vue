<template xmlns:v-clipboard>
  <div>
    <v-container fluid grid-list-xl>
      <div id="illus" class="styleframe-scrollposition"></div>
      <!-- Illustrationen -->
      <v-layout row wrap>
        <v-flex xs12 sm2 m2>
        </v-flex>
        <v-flex xs12 sm8 m8>
          <v-card>
            <div class="card--tile" style="height: auto;">
              <div class="v-card__text text-md-center"><h3>Illustrationen</h3>
              </div>
            </div>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm2 m2>
        </v-flex>
      </v-layout>
      <!-- Illustrationen -->
      <v-layout row wrap>
        <v-flex xs12 sm2 m2>
        </v-flex>
        <!-- Col 1-->
        <v-flex xs12 sm2 md2>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuDeskResearch" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-desk-research"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-desk-research</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuHimmelHolle" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-himmel-holle"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-himmel-holle</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuIdeenbeschreibung" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-ideenbeschreibung"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-ideenbeschreibung</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuChecklist" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-ubergabe-checklist"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-pause</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuBrainwriting" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-brainwriting"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-brainwriting</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuElevator" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-elevator-pitch"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-elevator-pitch</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuFeedback" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-feedback-grid"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-feedback-grid</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuRecherche" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-recherche-planen"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-recherche-planen</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuPoint" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-point-of-view"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-point-of-view</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuPresent" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-present"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-present</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuSmartphone" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-smartphone"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-smartphone</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuUserJourney" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-user-journey"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-user-journey</span>
                </div>
              </div>
            </div>
          </v-card>
        </v-flex>
        <!-- Col 2 -->
        <v-flex xs12 sm2 md2>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuShadowing" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-shadowing"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-shadowing</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illu4W" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-4w-fragen"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-4w-fragen</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuOportunity" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-opportunity-mapping"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-opportunity-mapping</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuVerantwortlichkeiten" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-verantwortlichkeiten"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-verantwortlichkeiten</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuTrendmixer" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-trendmixer"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-trendmixer</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuSpinnennetz" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-spinnennetz-diagramm"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-spinnennetz-diagramm</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuDownload" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-download-session"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-download-session</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuJobs" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-jobs-to-be-done"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-jobs-to-be-done</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuBenchmark" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-benchmark"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-benchmark</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuBrands" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-great-brands"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-great-brands</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuFeasiblty" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-feasibilty"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-feasibilty</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuSelbsttest" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-selbsttest"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-selbsttest</span>
                </div>
              </div>
            </div>
          </v-card>
        </v-flex>
        <!-- col 3-->
        <v-flex xs12 sm2 md2>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuBmc" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-business-model-canvas"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-business-model-canvas</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuExploration" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-explorationsfokus"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-explorationsfokus</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuStipvisite" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-stipvisite"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-stipvisite</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuStoryTelling" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-story-telling"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-story-telling</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuEmotionalMap" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-emotional-map"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-emotional-map</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuReframing" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-reframing"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-reframing</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuUserStory" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-user-story"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-user-story</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuUserInterview" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-user-interview"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-user-interview</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuPrototyping" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-prototyping"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-prototyping</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuDotmocracy" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-dotmocracy"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-dotmocracy</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuProblemDefinition" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-problem-definition"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-problem-definition</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuPitch" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-pitch"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-pitch</span>
                </div>
              </div>
            </div>
          </v-card>
        </v-flex>
        <!-- col 4 -->
        <v-flex xs12 sm2 md2>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuPersonas" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-personas"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-personas</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuUserSprechblase" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-user-sprechblase"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-user-sprechblase</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuEmphatyMap" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-emphaty-map"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-emphaty-map</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuVideoCut" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-video-cut"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-video-cut</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuDokumentation" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-dokumentation"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-dokumentation</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuEmotionalJourney" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-emotional-journey"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-emotional-journey</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuBehind" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-behind-the-scenes"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-behind-the-scenes</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuGraph" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-graph"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-graph</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuCustomerIsKing" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-customer-is-king"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-customer-is-king</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuJourney" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-journey"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-journey</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-illu-div-clp" v-clipboard:copy="illuUserMap" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-illu dl-illu-user-map"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-illu-user-map</span>
                </div>
              </div>
            </div>
          </v-card>

        </v-flex>
        <v-flex d-flex xs12 sm2 m2>
        </v-flex>
      </v-layout>


    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        illuDeskResearch: 'dl-illu-desk-research',
        illuHimmelHolle: 'dl-illu-himmel-holle',
        illuIdeenbeschreibung: 'dl-illu-ideenbeschreibung',
        illuChecklist: 'dl-illu-ubergabe-checklist',
        illuBrainwriting: 'dl-illu-brainwriting',
        illuElevator: 'dl-illu-elevator-pitch',
        illuFeedback: 'dl-illu-feedback-grid',
        illuRecherche: 'dl-illu-recherche-planen',
        illuPoint: 'dl-illu-point-of-view',
        illuPresent: 'dl-illu-present',
        illuSmartphone: 'dl-illu-smartphone',
        illuUserJourney: 'dl-illu-user-journey',
        illuShadowing: 'dl-illu-shadowing',
        illu4W: 'dl-illu-4w-fragen',
        illuOportunity: 'dl-illu-opportunity-mapping',
        illuVerantwortlichkeiten: 'dl-illu-verantwortlichkeiten',
        illuTrendmixer: 'dl-illu-trendmixer',
        illuSpinnennetz: 'dl-illu-spinnennetz-diagramm',
        illuDownload: 'dl-illu-download-session',
        illuJobs: 'dl-illu-jobs-to-be-done',
        illuBenchmark: 'dl-illu-benchmark',
        illuBrands: 'dl-illu-great-brands',
        illuFeasiblty: 'dl-illu-feasibilty',
        illuSelbsttest: 'dl-illu-selbsttest',
        illuBmc: 'dl-illu-business-model-canvas',
        illuExploration: 'dl-illu-explorationsfokus',
        illuStipvisite: 'dl-illu-stipvisite',
        illuStoryTelling: 'dl-illu-story-telling',
        illuEmotionalMap: 'dl-illu-emotional-map',
        illuReframing: 'dl-illu-reframing',
        illuUserStory: 'dl-illu-user-story',
        illuUserInterview: 'dl-illu-user-interview',
        illuPrototyping: 'dl-illu-prototyping',
        illuDotmocracy: 'dl-illu-dotmocracy',
        illuProblemDefinition: 'dl-illu-problem-definition',
        illuPitch: 'dl-illu-pitch',
        illuPersonas: 'dl-illu-personas',
        illuUserSprechblase: 'dl-illu-user-sprechblase',
        illuEmphatyMap: 'dl-illu-emphaty-map',
        illuVideoCut: 'dl-illu-video-cut',
        illuDokumentation: 'dl-illu-dokumentation',
        illuEmotionalJourney: 'dl-illu-emotional-journey',
        illuBehind: 'dl-illu-behind-the-scenes',
        illuGraph: 'dl-illu-graph',
        illuCustomerIsKing: 'dl-illu-customer-is-king',
        illuJourney: 'dl-illu-journey',
        illuUserMap: 'dl-illu-user-map',
      }
    },
    methods: {
      onCopy: function (e) {
        alert('You copied css class: ' + e.text)
      },
      onError: function (e) {
        alert('Failed to copy texts')
      }
    },
    name: "illustrationen"
  }
</script>

<style scoped>

</style>




