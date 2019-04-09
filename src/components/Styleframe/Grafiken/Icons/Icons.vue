<template xmlns:v-clipboard>
  <div>
    <v-container fluid grid-list-xl>
      <div id="icons" class="styleframe-scrollposition"></div>
      <!-- Icons -->
      <v-layout row wrap>
        <v-flex xs12 sm2 m2>
        </v-flex>
        <v-flex xs12 sm8 m8>
          <v-card>
            <div class="card--tile" style="height: auto;">
              <div class="v-card__text text-md-center"><h3>Icons</h3>
              </div>
            </div>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm2 m2>
        </v-flex>
      </v-layout>


      <v-layout row wrap>
        <v-flex xs12 sm2 m2>
        </v-flex>
        <!-- Col 1-->
        <v-flex xs12 sm2 md2>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconBackArrow" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-back-arrow"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-back-arrow</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconForwardArrow" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-forward-arrow"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-forward-arrow</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconPlay" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-play"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-play</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconPause" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-pause"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-pause</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconPower" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-power"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-power</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconRemove" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-remove"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-remove</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconMenueSwitcher" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-menue-switcher"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-menue-switcher</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconHome" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-home"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-home</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconEntdecken" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-dframe-entdecken"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-dframe-entdecken</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconDtools" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-dtools"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-dtools</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconPortfolio" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-portfolio"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-portfolio</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconMeineProjekte" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-meine-projekte"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-meine-projekte</span>
                </div>
              </div>
            </div>
          </v-card>
        </v-flex>
        <!-- Col 2 -->
        <v-flex xs12 sm2 md2>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconMeinProfil" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-mein-profil"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-mein-profil</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconKontakt" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-kon"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-kon</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconFeedback" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-fb"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-fb</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconMapnadel" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-mn"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-mn</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconDbPlanetLink" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-pl-lk"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-pl-lk</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconSettings" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-settings"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-settings</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconZoomIn" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-zoom-in"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-zoom-in</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconSearch" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-search"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-search</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconFullscreen" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-fll"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-fll</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconUploadImage" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-up-img"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-up-img</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconGiveDocumentLeft" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-gv-doc-lft"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-gv-doc-lft</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconGiveDocumentRight" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-gv-doc-rgt"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-gv-doc-rgt</span>
                </div>
              </div>
            </div>
          </v-card>
        </v-flex>
        <!-- col 3-->
        <v-flex xs12 sm2 md2>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconUploadVideo" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-up-vid"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-up-vid</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconCamera" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-cam"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-cam</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconOkBox" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-ok-box"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-ok-box</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconNotes" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-notes"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-notes</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconUploadDocument" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-up-doc"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-up-doc</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconSingleDocument" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-sn-doc"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-sn-doc</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconDownload" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-dl"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-dl</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconSort" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-sort"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-sort</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconEye" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-eye"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-eye</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconGroup" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-group"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-group</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconIdea" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-idea"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-idea</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconInfo" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-info"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-info</span>
                </div>
              </div>
            </div>
          </v-card>
        </v-flex>
        <!-- col 4 -->
        <v-flex xs12 sm2 md2>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconBell" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-bell"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-bell</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconClock" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-clock"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-clock</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconReload" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-reload"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-reload</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconArrowUp" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-arw-up"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-arw-up</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconOk" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-ok"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-ok</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconInternerAdmin" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-int-adm"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-int-adm</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconSystemAdmin" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-sys-adm"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-sys-adm</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconGast" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-gast"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-sys-adm</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconPoIntern" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-po-int"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-po-int</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconPoExtern" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-po-ext"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-po-ext</span>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="dl-icon-div-clp" v-clipboard:copy="iconContentManager" v-clipboard:success="onCopy"
                  v-clipboard:error="onError">
            <div style="display: flex; justify-content:center;padding-top:30px;">
              <div class="dl-icon dl-icon-con-mng"></div>
            </div>
            <div class="v-card__text">
              <div class="layout">
                <div class="flex text-xs-center caption">
                  <span>dl-icon-con-mng</span>
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
        iconBackArrow: 'dl-icon-back-arrow',
        iconForwardArrow: 'dl-icon-forward-arrow',
        iconPlay: 'dl-icon-play',
        iconPause: 'dl-icon-pause',
        iconPower: 'dl-icon-power',
        iconAdd: 'dl-icon-add',
        iconRemove: 'dl-icon-remove',
        iconMenueSwitcher: 'dl-icon-menue-switcher',
        iconHome: 'dl-icon-home',
        iconEntdecken: 'dl-icon-dframe-entdecken',
        iconDtools: 'dl-icon-dtools',
        iconPortfolio: 'dl-icon-portflio',
        iconMeineProjekte: 'dl-icon-meine-projekte',
        iconMeinProfil: 'dl-icon-mein-profil',
        iconKontakt: 'dl-icon-kon',
        iconFeedback: 'dl-icon-back-fb',
        iconMapnadel: 'dl-icon-mn',
        iconDbPlanetLink: 'dl-icon-pl-lk',
        iconSettings: 'dl-icon-settings',
        iconZoomIn: 'dl-icon-zoom-in',
        iconSearch: 'dl-icon-search',
        iconFullscreen: 'dl-icon-fll',
        iconUploadImage: 'dl-icon-up-img',
        iconGiveDocumentLeft: 'dl-icon-gv-doc-lft',
        iconGiveDocumentRight: 'dl-icon-gv-doc-rgt',
        iconUploadVideo: 'dl-icon-up-vid',
        iconCamera: 'dl-icon-cam',
        iconOkBox: 'dl-icon-ok-box',
        iconNotes: 'dl-icon-notes',
        iconUploadDocument: 'dl-icon-up-doc',
        iconSingleDocument: 'dl-icon-sn-doc',
        iconDownload: 'dl-icon-dl',
        iconSort: 'dl-icon-sort',
        iconEye: 'dl-icon-eye',
        iconGroup: 'dl-icon-group',
        iconIdea: 'dl-icon-idea',
        iconInfo: 'dl-icon-info',
        iconBell: 'dl-icon-bell',
        iconClock: 'dl-icon-clock',
        iconReload: 'dl-icon-reload',
        iconArrowUp: 'dl-icon-arw-up',
        iconOk: 'dl-icon-ok',
        iconInternerAdmin: 'dl-icon-int-adm',
        iconSystemAdmin: 'dl-icon-sys-adm',
        iconGast: 'dl-icon-gast',
        iconPoIntern: 'dl-icon-po-int',
        iconPoExtern: 'dl-icon-po-ext',
        iconContentManager: 'dl-icon-cont-mng',
      }
    },
    methods: {
      onCopy: function (e) {
        alert('You just copied: ' + e.text)
      },
      onError: function (e) {
        alert('Failed to copy texts')
      }
    },
    name: "icons"
  }
</script>

<style scoped>

</style>




