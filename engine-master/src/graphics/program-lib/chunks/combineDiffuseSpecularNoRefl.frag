vec3 combineColor(inout psInternalData data) {
    return data.albedo * data.diffuseLight + data.specularLight * data.specularity;
}

