'use strict';

const child_process = require("child_process")

const {minecraftDirectory} = require("./updater.js")

class MinecraftRunner {

    constructor(username, uuid, accessToken) {
        this.executeString = 'javaw -Xmx1024M "-Djava.library.path=' + minecraftDirectory +
            '\\versions\\ForgeOptiFine 1.11\\natives" -cp "' + minecraftDirectory +
            '\\libraries\\net\\minecraftforge\\forge\\1.11-13.19.1.2189\\forge-1.11-13.19.1.2189.jar;' + minecraftDirectory +
            '\\libraries\\net\\minecraft\\launchwrapper\\1.12\\launchwrapper-1.12.jar;' + minecraftDirectory +
            '\\libraries\\org\\ow2\\asm\\asm-all\\5.0.3\\asm-all-5.0.3.jar;' + minecraftDirectory +
            '\\libraries\\jline\\jline\\2.13\\jline-2.13.jar;' + minecraftDirectory +
            '\\libraries\\com\\typesafe\\akka\\akka-actor_2.11\\2.3.3\\akka-actor_2.11-2.3.3.jar;' + minecraftDirectory +
            '\\libraries\\com\\typesafe\\config\\1.2.1\\config-1.2.1.jar;' + minecraftDirectory +
            '\\libraries\\org\\scala-lang\\scala-actors-migration_2.11\\1.1.0\\scala-actors-migration_2.11-1.1.0.jar;' + minecraftDirectory +
            '\\libraries\\org\\scala-lang\\scala-compiler\\2.11.1\\scala-compiler-2.11.1.jar;' + minecraftDirectory +
            '\\libraries\\org\\scala-lang\\plugins\\scala-continuations-library_2.11\\1.0.2\\scala-continuations-library_2.11-1.0.2.jar;' + minecraftDirectory +
            '\\libraries\\org\\scala-lang\\plugins\\scala-continuations-plugin_2.11.1\\1.0.2\\scala-continuations-plugin_2.11.1-1.0.2.jar;' + minecraftDirectory +
            '\\libraries\\org\\scala-lang\\scala-library\\2.11.1\\scala-library-2.11.1.jar;' + minecraftDirectory +
            '\\libraries\\org\\scala-lang\\scala-parser-combinators_2.11\\1.0.1\\scala-parser-combinators_2.11-1.0.1.jar;' + minecraftDirectory +
            '\\libraries\\org\\scala-lang\\scala-reflect\\2.11.1\\scala-reflect-2.11.1.jar;' + minecraftDirectory +
            '\\libraries\\org\\scala-lang\\scala-swing_2.11\\1.0.1\\scala-swing_2.11-1.0.1.jar;' + minecraftDirectory +
            '\\libraries\\org\\scala-lang\\scala-xml_2.11\\1.0.2\\scala-xml_2.11-1.0.2.jar;' + minecraftDirectory +
            '\\libraries\\lzma\\lzma\\0.0.1\\lzma-0.0.1.jar;' + minecraftDirectory +
            '\\libraries\\net\\sf\\jopt-simple\\jopt-simple\\4.6\\jopt-simple-4.6.jar;' + minecraftDirectory +
            '\\libraries\\java3d\\vecmath\\1.5.2\\vecmath-1.5.2.jar;' + minecraftDirectory +
            '\\libraries\\net\\sf\\trove4j\\trove4j\\3.0.3\\trove4j-3.0.3.jar;' + minecraftDirectory +
            '\\libraries\\com\\mojang\\netty\\1.6\\netty-1.6.jar;' + minecraftDirectory +
            '\\libraries\\oshi-project\\oshi-core\\1.1\\oshi-core-1.1.jar;' + minecraftDirectory +
            '\\libraries\\net\\java\\dev\\jna\\jna\\3.4.0\\jna-3.4.0.jar;' + minecraftDirectory +
            '\\libraries\\net\\java\\dev\\jna\\platform\\3.4.0\\platform-3.4.0.jar;' + minecraftDirectory +
            '\\libraries\\com\\ibm\\icu\\icu4j-core-mojang\\51.2\\icu4j-core-mojang-51.2.jar;' + minecraftDirectory +
            '\\libraries\\net\\sf\\jopt-simple\\jopt-simple\\4.6\\jopt-simple-4.6.jar;' + minecraftDirectory +
            '\\libraries\\com\\paulscode\\codecjorbis\\20101023\\codecjorbis-20101023.jar;' + minecraftDirectory +
            '\\libraries\\com\\paulscode\\codecwav\\20101023\\codecwav-20101023.jar;' + minecraftDirectory +
            '\\libraries\\com\\paulscode\\libraryjavasound\\20101123\\libraryjavasound-20101123.jar;' + minecraftDirectory +
            '\\libraries\\com\\paulscode\\librarylwjglopenal\\20100824\\librarylwjglopenal-20100824.jar;' + minecraftDirectory +
            '\\libraries\\com\\paulscode\\soundsystem\\20120107\\soundsystem-20120107.jar;' + minecraftDirectory +
            '\\libraries\\io\\netty\\netty-all\\4.0.23.Final\\netty-all-4.0.23.Final.jar;' + minecraftDirectory +
            '\\libraries\\com\\google\\guava\\guava\\17.0\\guava-17.0.jar;' + minecraftDirectory +
            '\\libraries\\org\\apache\\commons\\commons-lang3\\3.3.2\\commons-lang3-3.3.2.jar;' + minecraftDirectory +
            '\\libraries\\commons-io\\commons-io\\2.4\\commons-io-2.4.jar;' + minecraftDirectory +
            '\\libraries\\commons-codec\\commons-codec\\1.9\\commons-codec-1.9.jar;' + minecraftDirectory +
            '\\libraries\\net\\java\\jinput\\jinput\\2.0.5\\jinput-2.0.5.jar;' + minecraftDirectory +
            '\\libraries\\net\\java\\jutils\\jutils\\1.0.0\\jutils-1.0.0.jar;' + minecraftDirectory +
            '\\libraries\\com\\google\\code\\gson\\gson\\2.2.4\\gson-2.2.4.jar;' + minecraftDirectory +
            '\\libraries\\com\\mojang\\realms\\1.10.4\\realms-1.10.4.jar;' + minecraftDirectory +
            '\\libraries\\org\\apache\\commons\\commons-compress\\1.8.1\\commons-compress-1.8.1.jar;' + minecraftDirectory +
            '\\libraries\\org\\apache\\httpcomponents\\httpclient\\4.3.3\\httpclient-4.3.3.jar;' + minecraftDirectory +
            '\\libraries\\commons-logging\\commons-logging\\1.1.3\\commons-logging-1.1.3.jar;' + minecraftDirectory +
            '\\libraries\\org\\apache\\httpcomponents\\httpcore\\4.3.2\\httpcore-4.3.2.jar;' + minecraftDirectory +
            '\\libraries\\it\\unimi\\dsi\\fastutil\\7.0.12_mojang\\fastutil-7.0.12_mojang.jar;' + minecraftDirectory +
            '\\libraries\\org\\lwjgl\\lwjgl\\lwjgl\\2.9.4-nightly-20150209\\lwjgl-2.9.4-nightly-20150209.jar;' + minecraftDirectory +
            '\\libraries\\org\\lwjgl\\lwjgl\\lwjgl_util\\2.9.4-nightly-20150209\\lwjgl_util-2.9.4-nightly-20150209.jar;' + minecraftDirectory +
            '\\libraries\\org\\apache\\logging\\log4j\\log4j-api\\2.0-beta9\\log4j-api-2.0-beta9.jar;' + minecraftDirectory +
            '\\libraries\\org\\apache\\logging\\log4j\\log4j-core\\2.0-beta9\\log4j-core-2.0-beta9.jar;' + minecraftDirectory +
            '\\libraries\\com\\mojang\\authlib\\1.5.24\\authlib-1.5.24.jar;' + minecraftDirectory +
            '\\versions\\ForgeOptiFine 1.11\\ForgeOptiFine 1.11.jar"' +
            ' -Dfml.ignoreInvalidMinecraftCertificates=true -Dfml.ignorePatchDiscrepancies=true -Dorg.lwjgl.opengl.Display.allowSoftwareOpenGL=true -XX:+UseConcMarkSweepGC -XX:+CMSIncrementalMode -XX:-UseAdaptiveSizePolicy -Xmn128M net.minecraft.launchwrapper.Launch' +
            ' --version "ForgeOptiFine 1.11" --gameDir "' + minecraftDirectory + '" --assetsDir "' + minecraftDirectory + '\\assets" --assetIndex 1.11' +
            ' --username ' + username + ' --uuid ' + uuid + ' --accessToken ' + accessToken + ' --userType mojang --tweakClass net.minecraftforge.fml.common.launcher.FMLTweaker --versionType Forge --width 925 --height 530'
    }

    run(options) {
        if (options.onStart) {
            options.onStart()
        }

        child_process.exec(this.executeString, { cwd: minecraftDirectory }, options.onFinish)
    }

}

module.exports = {MinecraftRunner}
