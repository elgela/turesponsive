<?php
function versionado(string $archivo): string {
    return $archivo . '?v=' . filemtime($archivo);
}
?>