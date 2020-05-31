Camera changes:

- Rename matrixWorldInverse -> matrixToWorld.  Per matrix naming conventions.
- Rename projectionMatrix -> worldToScreenProjection.  Per matrix naming conventions.
- Rename projectionMatrixInverse -> screenToWorldUnprojection.  Per matrix naming conventions.
- Added pixelAspectRatio.  This is a more natural aspect ratio specification.
- Remove automatic updating of camera matrices upon changes.

Perspective Camera Changes:

- fov -> verticalFov so no one needs to every ask which dimension it is.
- aspectRatio -> removed.  Replaced with Camera.pixelAspectRatio.

Orthographic Camera:

- top, bottom -> replaced with center +/- verticalWidth;
- left, right -> removed.  Derived from center +/- verticalWidth * pixelAspectRatio * view.aspectRatio();